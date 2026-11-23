import Link from "next/link";
import {
  ArrowRight,
  AudioWaveform,
  Globe2,
  Headphones,
  Layers3,
  Mic2,
  Music2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Music Creation",
    description:
      "A creative environment for exploring AI-assisted music ideas, melodies, arrangements and compositions."
  },
  {
    icon: Mic2,
    title: "Voice & Recording",
    description:
      "A planned recording workspace for capturing vocals and instruments with a focus on natural sound."
  },
  {
    icon: SlidersHorizontal,
    title: "Mixing & Mastering",
    description:
      "Production tools designed to bring levels, dynamics, effects and final audio quality together."
  },
  {
    icon: Layers3,
    title: "Multitrack Studio",
    description:
      "A structured workspace concept for arranging tracks, working with stems and building complete songs."
  },
  {
    icon: AudioWaveform,
    title: "Audio Processing",
    description:
      "A foundation for waveform editing, audio analysis, processing and high-quality exports."
  },
  {
    icon: Globe2,
    title: "Multilingual Creation",
    description:
      "A multilingual product direction with support planned for different languages and writing systems."
  }
];

const workflow = [
  {
    number: "01",
    title: "Start with an idea",
    description:
      "Bring a musical concept, lyrics, melody or recording idea into your creative workflow."
  },
  {
    number: "02",
    title: "Build your composition",
    description:
      "Develop the arrangement and shape the musical elements of your project."
  },
  {
    number: "03",
    title: "Refine your sound",
    description:
      "Use production tools to work toward a balanced and polished result."
  },
  {
    number: "04",
    title: "Prepare your release",
    description:
      "Organize your audio, artwork and track information for your intended release."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080B14] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -right-48 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/[0.07]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="PKAI Music Studio home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/15">
              <AudioWaveform className="h-6 w-6 text-violet-300" />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                PKAI <span className="text-violet-300">Music</span>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                Creative Studio
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#workflow"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Workflow
            </Link>
            <Link
              href="#safety"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Safety
            </Link>
          </div>

          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20"
          >
            Explore Studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 md:grid-cols-2 md:py-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200">
            <Sparkles className="h-4 w-4" />
            A new creative music platform
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Your music.
            <br />
            Your creativity.
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Your studio.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            PKAI Music Studio is being built as a creative platform for
            songwriting, AI-assisted music creation, recording, audio
            production and multilingual musical expression.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-500"
            >
              Explore Capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#workflow"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-violet-300" />
              Multilingual vision
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-violet-300" />
              Audio-first design
            </span>
          </div>
        </div>

        {/* Studio visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />

          <div className="relative rounded-3xl border border-white/10 bg-[#101525]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div>
                <p className="text-sm font-bold text-white">
                  Creative Workspace
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Music production environment
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-semibold text-emerald-300">
                  Workspace concept
                </span>
              </div>
            </div>

            <div className="my-7 rounded-2xl border border-white/[0.07] bg-[#080D19] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-300">
                    Audio visualization
                  </p>
                  <p className="mt-1 text-[10px] text-slate-600">
                    Illustrative waveform
                  </p>
                </div>
                <AudioWaveform className="h-5 w-5 text-violet-300" />
              </div>

              <div
                className="flex h-28 items-center justify-center gap-[3px] overflow-hidden"
                aria-label="Decorative audio waveform illustration"
              >
                {Array.from({ length: 72 }, (_, index) => {
                  const height =
                    12 +
                    Math.abs(Math.sin(index * 0.47)) * 55 +
                    Math.abs(Math.cos(index * 0.19)) * 35;

                  return (
                    <span
                      key={index}
                      className="w-1 shrink-0 rounded-full bg-gradient-to-t from-violet-600 to-cyan-300 opacity-80"
                      style={{ height: `${Math.min(height, 96)}%` }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                <Music2 className="mb-3 h-5 w-5 text-violet-300" />
                <p className="text-xs font-semibold text-white">
                  Composition
                </p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Music ideas
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                <Mic2 className="mb-3 h-5 w-5 text-cyan-300" />
                <p className="text-xs font-semibold text-white">
                  Recording
                </p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Audio capture
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                <SlidersHorizontal className="mb-3 h-5 w-5 text-fuchsia-300" />
                <p className="text-xs font-semibold text-white">
                  Production
                </p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Sound shaping
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-violet-400/15 bg-violet-500/[0.06] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15">
                  <Sparkles className="h-5 w-5 text-violet-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    One creative destination
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    A unified music production experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              Platform capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Everything starts with
              <span className="text-violet-300"> creativity.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              A planned collection of creative and production capabilities
              designed to support the music-making journey.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/[0.07] bg-[#101525]/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#141b2d]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 transition group-hover:bg-violet-500/20">
                    <Icon className="h-6 w-6 text-violet-300" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Creative workflow
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            From first idea
            <br />
            to finished music.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            The intended workflow brings the main stages of music creation
            into one organized experience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
            >
              <p className="text-4xl font-extrabold tracking-tight text-violet-400/50">
                {step.number}
              </p>

              <h3 className="mt-6 text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section
        id="safety"
        className="relative z-10 border-y border-white/[0.06] bg-[#0d1322] px-5 py-20 sm:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-3xl gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
              <ShieldCheck className="h-7 w-7 text-emerald-300" />
            </div>

           
