import { ChatInterface } from "@/components/chat-interface";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-foreground dark:bg-slate-950 dark:text-slate-50 lg:h-screen lg:overflow-hidden">
      <main className="mx-auto flex h-full w-full flex-1 flex-col p-0 lg:p-6 xl:p-8">
        <div className="grid h-full flex-1 gap-0 lg:grid-cols-[400px_1fr_400px] lg:gap-6 xl:grid-cols-[460px_1fr_460px] 2xl:grid-cols-[minmax(500px,1fr)_minmax(600px,2fr)_minmax(500px,1fr)]">

          {/* Left Column: Branding and Info */}
          <aside className="hidden flex-col gap-6 rounded-3xl border border-emerald-200/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-emerald-900/70 dark:bg-slate-950/60 lg:flex lg:overflow-y-auto lg:p-6 custom-scrollbar">
            <div className="space-y-3">
              <p className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-50">
                DocHat · Healthcare Chatbot
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Ask health questions with{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  privacy-first
                </span>{" "}
                AI.
              </h1>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                DocHat gives you empathetic, evidence-based health information —
                with conversations protected by Cencori&apos;s PII detection,
                masking, and prompt-injection defenses. Not a substitute for a
                doctor or emergency care.
              </p>
            </div>

            <div className="mt-auto flex flex-col items-start gap-2 rounded-2xl border border-emerald-200/80 bg-emerald-600 px-4 py-3 text-sm text-emerald-50 shadow-md dark:border-emerald-900/80 dark:bg-emerald-800">
              <p className="font-semibold">Secured by Cencori</p>
              <p className="text-xs opacity-90 leading-relaxed">
                AI firewall for healthcare data: PII masking, prompt-injection
                protection, and encrypted routing across LLM providers.
              </p>
            </div>
          </aside>

          {/* Center Column: Chat Interface */}
          <section className="flex flex-col h-[100dvh] lg:h-auto lg:min-h-0 lg:overflow-hidden">
            <div className="flex h-full flex-col bg-background/90 shadow-[0_18px_45px_rgba(15,118,110,0.13)] ring-1 ring-emerald-200/80 dark:bg-slate-950/80 dark:ring-emerald-900/80 lg:rounded-3xl lg:p-3 lg:overflow-hidden">
              <ChatInterface />
            </div>
          </section>

          {/* Right Column: Important Disclaimers */}
          <aside className="hidden flex-col gap-5 rounded-3xl border border-emerald-100/80 bg-white/85 p-5 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-emerald-900/70 dark:bg-slate-950/70 dark:text-slate-200 lg:flex lg:overflow-y-auto lg:p-6 custom-scrollbar">
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                Important
              </h2>
              <ul className="space-y-2.5 text-xs leading-relaxed">
                <li>
                  <span className="font-semibold">Not medical advice:</span> DocHat
                  is for education only and does not replace a licensed
                  healthcare professional.
                </li>
                <li>
                  <span className="font-semibold">Emergencies:</span> If you
                  have chest pain, difficulty breathing, thoughts of self-harm,
                  or any medical emergency, call your local emergency number or
                  go to the nearest emergency department immediately.
                </li>
                <li>
                  <span className="font-semibold">Privacy:</span> Cencori helps
                  protect conversations.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-emerald-50/90 p-4 text-xs text-emerald-900 shadow-inner dark:bg-emerald-900/30 dark:text-emerald-50">
              <p className="mb-2 font-semibold">How DocHat works</p>
              <ol className="list-decimal space-y-1.5 pl-4 leading-relaxed">
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

            <div className="mt-auto text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
              Built with Next.js 16, AI SDK, Tailwind CSS v4, Cencori and shadcn-inspired
              components.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
