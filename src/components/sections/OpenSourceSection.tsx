import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const GITHUB_USERNAME = "dev-malay";
const CACHE_KEY = "oss-contribs-cache-v1";
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

type OssStatus = "open" | "merged" | "closed";
type OssKind = "pr" | "issue";

interface OssItem {
  id: number;
  repo: string;
  title: string;
  number: number;
  kind: OssKind;
  status: OssStatus;
  url: string;
  updatedAt: string;
}

interface OssGroup {
  repo: string;
  items: OssItem[];
}

interface CachePayload {
  timestamp: number;
  items: OssItem[];
}

function parseRepoFullName(item: any): string {
  // Prefer repository_url: https://api.github.com/repos/{owner}/{repo}
  if (typeof item?.repository_url === "string") {
    const parts = item.repository_url.split("/repos/");
    if (parts[1]) return parts[1];
  }
  // Fallback: parse html_url https://github.com/{owner}/{repo}/...
  if (typeof item?.html_url === "string") {
    const m = item.html_url.match(/github\.com\/([^/]+\/[^/]+)/);
    if (m) return m[1];
  }
  return "unknown/unknown";
}

function toOssItem(item: any): OssItem | null {
  const repo = parseRepoFullName(item);
  const owner = repo.split("/")[0]?.toLowerCase();
  // Exclude own repos — mirrors bit2swaz "across repos outside my own"
  if (owner === GITHUB_USERNAME.toLowerCase()) return null;

  const kind: OssKind = item?.pull_request ? "pr" : "issue";
  const state: string = item?.state ?? "open";

  let status: OssStatus;
  if (state === "open") {
    status = "open";
  } else if (kind === "pr") {
    status = item?.pull_request?.merged_at ? "merged" : "closed";
  } else {
    // Issues: closed as completed => resolved (✓), closed as not_planned => closed (✕)
    status = item?.state_reason === "not_planned" ? "closed" : "merged";
  }

  return {
    id: item?.id ?? `${repo}#${item?.number}`,
    repo,
    title: item?.title ?? "(no title)",
    number: item?.number ?? 0,
    kind,
    status,
    url: item?.html_url ?? `https://github.com/${repo}`,
    updatedAt: item?.updated_at ?? item?.created_at ?? "",
  };
}

async function fetchSearch(query: string): Promise<any[]> {
  const res = await fetch(
    `https://api.github.com/search/issues?q=${query}&per_page=100`,
    {
      headers: { Accept: "application/vnd.github+json" },
    }
  );
  if (res.status === 403) {
    throw new Error("rate-limited");
  }
  if (!res.ok) {
    throw new Error(`github-${res.status}`);
  }
  const data = await res.json();
  return Array.isArray(data?.items) ? data.items : [];
}

function readCache(): CachePayload | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed?.timestamp || !Array.isArray(parsed.items)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function statusGlyph(status: OssStatus) {
  if (status === "open")
    return { char: "○", color: "text-[#3fb950]", label: "open" };
  if (status === "merged")
    return { char: "✓", color: "text-[#a371f7]", label: "merged" };
  return { char: "✕", color: "text-[#f85149]", label: "closed" };
}

export function OpenSourceSection() {
  const [items, setItems] = useState<OssItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // Show stale cache instantly (stale-while-revalidate)
      const cached = readCache();
      if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
        if (!cancelled) {
          setItems(cached.items);
          setLoading(false);
        }
      }

      try {
        const [prs, issues] = await Promise.all([
          fetchSearch(`author%3A${GITHUB_USERNAME}+type%3Apr`),
          fetchSearch(`author%3A${GITHUB_USERNAME}+type%3Aissue`),
        ]);
        const mapped = [...prs, ...issues]
          .map(toOssItem)
          .filter((x): x is OssItem => x !== null)
          // newest activity first
          .sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));

        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), items: mapped })
          );
        } catch {
          /* ignore quota errors */
        }

        if (!cancelled) {
          setItems(mapped);
          setError(null);
          setLoading(false);
        }
      } catch (e: any) {
        if (cancelled) return;
        // If we have stale cache (even expired), keep showing it
        const stale = readCache();
        if (stale && stale.items.length > 0) {
          setItems(stale.items);
          setError(
            e?.message === "rate-limited"
              ? "github rate limit hit — showing cached data."
              : "live update failed — showing cached data."
          );
        } else {
          setError(
            e?.message === "rate-limited"
              ? "github rate limit hit. try again in a minute."
              : "couldn't load contributions right now."
          );
        }
        setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const groups: OssGroup[] = useMemo(() => {
    const map = new Map<string, OssItem[]>();
    for (const it of items) {
      if (!map.has(it.repo)) map.set(it.repo, []);
      map.get(it.repo)!.push(it);
    }

    return [...map.entries()]
      .map(([repo, repoItems]) => ({
        repo,
        items: [...repoItems].sort((a, b) => b.number - a.number),
      }))
      // most recently updated repo first
      .sort((a, b) => {
        const aMax = Math.max(
          ...a.items.map((i) => +new Date(i.updatedAt || 0))
        );
        const bMax = Math.max(
          ...b.items.map((i) => +new Date(i.updatedAt || 0))
        );
        return bMax - aMax;
      });
  }, [items]);

  return (
    <motion.section
      id="open-source"
      className="py-4"
      variants={itemVariants}
    >
      {loading && items.length === 0 ? (
        <div className="space-y-6" aria-label="loading">
          {[0, 1].map((g) => (
            <div key={g}>
              <div className="mb-1 h-3 w-32 animate-pulse bg-zinc-900" />
              {[0, 1].map((r) => (
                <div
                  key={r}
                  className="flex items-baseline gap-3 border-b border-zinc-900 py-2"
                >
                  <div className="h-3 w-3 animate-pulse bg-zinc-900" />
                  <div className="h-3 flex-1 animate-pulse bg-zinc-900" />
                  <div className="h-3 w-16 animate-pulse bg-zinc-900" />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : error && items.length === 0 ? (
        <div className="py-6">
          <p className="font-mono text-xs text-zinc-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 font-mono text-xs text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white"
          >
            retry
          </button>
        </div>
      ) : groups.length === 0 ? (
        <p className="py-6 font-mono text-xs text-zinc-500">
          no contributions found.
        </p>
      ) : (
        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.repo}>
              <h2 className="mb-1 font-mono text-xs font-normal text-zinc-500">
                {group.repo}
              </h2>
              <div>
                {group.items.map((it) => {
                  const glyph = statusGlyph(it.status);
                  return (
                    <a
                      key={`${it.repo}#${it.number}`}
                      href={it.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-baseline gap-3 border-b border-zinc-800/60 py-2 transition-colors hover:border-zinc-700"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        className={`font-mono text-xs ${glyph.color}`}
                        title={glyph.label}
                        aria-label={glyph.label}
                      >
                        {glyph.char}
                      </span>
                      <span className="font-sans text-sm font-normal text-zinc-200 transition-colors group-hover:text-white">
                        {it.title}
                      </span>
                      <span className="ml-auto flex shrink-0 items-baseline gap-1.5 font-mono text-xs text-zinc-500">
                        <span className="rounded-sm border border-zinc-800 px-1 py-px text-[10px] uppercase tracking-wide">
                          {it.kind}
                        </span>
                        <span>{it.number}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {error && items.length > 0 && (
        <p className="mt-6 font-mono text-[11px] text-zinc-600">{error}</p>
      )}

      <div className="mt-2 flex justify-start">
        <a
          href={`https://github.com/search?q=author%3A${GITHUB_USERNAME}+type%3Apr&type=pullrequests`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-100"
          style={{ textDecoration: "none" }}
        >
          view all on github →
        </a>
      </div>
    </motion.section>
  );
}
