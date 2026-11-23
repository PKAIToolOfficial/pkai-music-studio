import { AudioWaveform, Music2, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080B14] px-5 text-white"
      role="status"
      aria-live="polite"
      aria-label="Loading PKAI Music Studio"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[110px]" />
      </div>

      <section className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        {/* Brand icon */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-3xl border border-violet-400/20 opacity-30" />

          <div className="absolute inset-2 rounded-2xl border border-violet-400/30 bg-violet-500/10" />

          <AudioWaveform className="relative h-11 w-11 text-violet-300" />
        </div>

        {/* Brand name */}
        <h1 className="mt-7 text-2xl font-extrabold tracking-tight">
          PKAI <span className="text-violet-300">Music</span> Studio
        </h1>

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
          Creative Workspace
        </p>

        {/* Loading indicator */}
        <div className="mt-12 flex items-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className="w-1.5 animate-pulse rounded-full bg-violet-400"
              style={{
                height: `${16 + index * 6}px`,
                animationDelay: `${index * 120}ms`
              }}
            />
          ))}
        </div>

        <p className="mt-5 text-sm font-medium text-slate-300">
          Preparing your workspace
        </p>

        <p className="mt-2 text-xs text-slate-600">
          Please wait while the page loads.
        </p>

        {/* Decorative footer */}
        <div className="mt-14 flex items-center gap-5 text-slate-600">
          <Music2 className="h-4 w-4" />

          <span className="h-1 w-1 rounded-full bg-slate-700" />

          <Sparkles className="h-4 w-4" />
        </div>
      </section>
    </main>
  );
}
