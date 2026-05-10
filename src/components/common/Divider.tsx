export function Divider({ label }: { label?: string }) {
  return (
    <div className="relative h-8 w-[calc(100%+32px)] md:w-[calc(100%+80px)] mt-6 mb-2 mx-[-16px] md:mx-[-40px] border-t border-b border-zinc-800 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #222 0px, #222 1px, transparent 1px, transparent 8px)',
        }}
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-black px-4 text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-normal font-sans">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
