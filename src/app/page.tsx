import { ChatInterface } from "@/components/chat-interface";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col outline-none bg-black text-white lg:h-screen lg:overflow-hidden">
      <main className="mx-auto flex h-full w-full flex-1 flex-col outline-none p-0 lg:p-6 xl:p-8">
        <div className="grid h-full flex-1 gap-0 lg:grid-cols-[400px_1fr_400px] lg:gap-6 xl:grid-cols-[460px_1fr_460px] 2xl:grid-cols-[minmax(500px,1fr)_minmax(600px,2fr)_minmax(500px,1fr)]">

          {/* Left Column: Branding and Info */}
          <aside className="hidden flex-col gap-6 rounded-3xl border border-zinc-800/40 bg-zinc-900/50 p-5 shadow-sm backdrop-blur lg:flex lg:overflow-y-auto lg:p-6 custom-scrollbar">
            <div className="space-y-4">
              <p className="inline-flex w-fit items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                DocHat · Healthcare Chatbot
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white">
                Ask health questions with{" "}
                <span className="text-emerald-500">
                  privacy-first
                </span>{" "}
                AI.
              </h1>
              <p className="text-sm leading-relaxed text-zinc-400">
                DocHat gives you empathetic, evidence-based health information —
                with conversations protected by Cencori&apos;s PII detection,
                masking, and prompt-injection defenses. Not a substitute for a
                doctor or emergency care.
              </p>
            </div>

            <div className="mt-auto flex flex-col items-start gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-4 text-sm text-emerald-50 shadow-md">
              <p className="font-semibold text-emerald-400">Secured by Cencori</p>
              <p className="text-xs opacity-90 leading-relaxed text-emerald-200/70">
                AI firewall for healthcare data: PII masking, prompt-injection
                protection, and encrypted routing across LLM providers.
              </p>
            </div>
          </aside>

          {/* Center Column: Chat Interface */}
          <section className="flex flex-col outline-none h-[100dvh] lg:h-auto lg:min-h-0 lg:overflow-hidden">
            <div className="flex h-full flex-col outline-none bg-black lg:rounded-3xl lg:bg-zinc-900/30 lg:p-3 lg:shadow-xl lg:overflow-hidden">
              <ChatInterface />
            </div>
          </section>

          {/* Right Column: Important Disclaimers */}
          <aside className="hidden flex-col gap-6 rounded-3xl border border-zinc-800/40 bg-zinc-900/50 p-5 text-sm text-zinc-300 shadow-sm backdrop-blur lg:flex lg:overflow-y-auto lg:p-6 custom-scrollbar">
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Important
              </h2>
              <ul className="space-y-3 text-xs text-zinc-400 leading-relaxed">
                <li>
                  <span className="font-semibold text-zinc-200">Not medical advice:</span> DocHat
                  is for education only and does not replace a licensed
                  healthcare professional.
                </li>
                <li>
                  <span className="font-semibold text-zinc-200">Emergencies:</span> If you
                  have chest pain, difficulty breathing, thoughts of self-harm,
                  or any medical emergency, call your local emergency number or
                  go to the nearest emergency department immediately.
                </li>
                <li>
                  <span className="font-semibold text-zinc-200">Privacy:</span> Cencori helps
                  protect conversations with PII detection, masking, and
                  security monitoring.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800/50 bg-black/50 p-4 text-xs text-zinc-300 shadow-inner">
              <p className="mb-3 font-semibold text-zinc-200">How DocHat works</p>
              <ol className="list-decimal space-y-2 pl-4 leading-relaxed text-zinc-400 marker:text-zinc-600">
                <li>Your question is sent securely to the cencori API.</li>
                <li>
                  Cencori scans for sensitive informations before
                  the LLM sees your message.
                </li>
                <li>
                  The answer streams back in real time to this chat window.
                </li>
              </ol>
            </div>

            <div className="mt-auto text-[11px] leading-relaxed text-zinc-600">
              Built with Next.js 16, AI SDK, Tailwind CSS v4, Cencori and shadcn-inspired
              components.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
