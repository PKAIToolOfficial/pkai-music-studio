import Link from "next/link";
import {
  ArrowLeft,
  AudioWaveform,
  Compass,
  Home
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080B14] px-5 py-16 text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[110px]" />
      </div>

      <section className="relative z-10 w-full max-w-xl text-center">
        {/* Brand */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-3"
          aria-label="Return to PKAI Music Studio homepage"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/15">
            <AudioWaveform className="h-6 w-6 text-violet-300" />
          </div>

          <div className="text-left">
            <p className="text-lg font-bold tracking-tight">
              PKAI <span className="text-violet-300">Music</span>
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Creative Studio
            </p>
          </div>
        </Link>

        {/* Error illustration */}
        <div className="relative mx-auto mb-8 flex h-44 w-44 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-violet-400/10" />

          <div className="absolute inset-4 rounded-full border border-violet-400/15" />

          <div className="absolute inset-8 rounded-full bg-violet-500/10 blur-xl" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-400/25 bg-[#15172a] shadow-2xl shadow-violet-950/40">
            <Compass className="h-12 w-12 text-violet-300" />
          </div>
        </div>

        {/* Error text */}
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-300">
          Page not found
        </p>

        <h1 className="mt-5 text-7xl font-extrabold tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
          This track is not on the playlist.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
          The page you are looking for does not exist or may have been moved.
          Check the address or return to the PKAI Music Studio homepage.
        </p>

        {/* Navigation actions */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-500"
          >
            <Home className="h-4 w-4" />
            Back to Homepage
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/[0.07] pt-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} PKAI Music Studio
          </p>
        </div>
      </section>
    </main>
  );
}
