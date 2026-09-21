import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EXPERIENCE_DATA } from "@/constants/data";

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface ExperienceBlock {
  heading?: string;
  points: string[];
}

interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  sections: ExperienceBlock[];
}

function ExperienceItem({
  company,
  role,
  date,
  sections,
}: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-3 border-b border-zinc-900 pb-4 last:border-0 last:pb-0 last:mb-0">
      <div
        className="flex justify-between items-start cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex flex-row justify-between items-baseline gap-3 mb-1">
            <h3 className="font-sans text-[15px] font-medium tracking-tight text-zinc-100">
              {company}
            </h3>
            <span className="text-zinc-300 text-sm font-extralight font-sans shrink-0">{date}</span>
          </div>
          <p className="text-zinc-400 text-[13px] font-thin">{role}</p>
        </div>
        <div className="ml-4 pt-1">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-zinc-500 group-hover:text-white transition-colors"
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {sections.map((sec, i) => (
                <div key={i} className="space-y-2">
                  {sec.heading && (
                    <p className="text-zinc-200 text-sm font-normal">
                      {sec.heading}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {sec.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        <p className="text-zinc-400 text-[13px] leading-relaxed font-thin">{pt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <motion.section id="experience" className="py-4" variants={itemVariants}>
      <div className="">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </motion.section>
  );
}
