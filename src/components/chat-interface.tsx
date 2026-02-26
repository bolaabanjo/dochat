"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Stethoscope, ShieldCheck, Sparkles, ArrowUp, Loader2, Menu, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function ChatInterface() {
  const [input, setInput] = React.useState("");

  const {
    messages,
    sendMessage,
    status,
    error,
  } = useChat({
    transport: React.useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []),
  });

  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <section className="flex h-full flex-col gap-4">
      <header className="flex items-center justify-between gap-3 border-b border-emerald-200/70 bg-emerald-50 px-4 py-3 dark:border-emerald-900/60 dark:bg-emerald-950/40 lg:rounded-3xl lg:border">
        <div className="flex items-center gap-3">
          {/* Mobile Left Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-emerald-700 dark:text-emerald-300">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 border-r-emerald-200 dark:border-r-emerald-900">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-6 p-6">
                  <div className="space-y-3">
                    <p className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-50">
                      DocHat · Healthcare Chatbot
                    </p>
                    <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
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

                  <div className="mt-4 flex flex-col items-start gap-2 rounded-2xl border border-emerald-200/80 bg-emerald-600 px-4 py-3 text-sm text-emerald-50 shadow-md dark:border-emerald-900/80 dark:bg-emerald-800">
                    <p className="font-semibold">Secured by Cencori</p>
                    <p className="text-xs opacity-90 leading-relaxed">
                      AI firewall for healthcare data: PII masking, prompt-injection
                      protection, and encrypted routing across LLM providers.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-emerald-950 dark:text-emerald-50">
              DocHat Assistant
            </h2>
            <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80">
              Secure, evidence-based health guidance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Cencori Protected</span>
          </div>

          {/* Mobile Right Info Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-emerald-700 dark:text-emerald-300">
                <Info className="h-5 w-5" />
                <span className="sr-only">Important Info</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l-emerald-200 dark:border-l-emerald-900">
              <SheetTitle className="sr-only">Important Information</SheetTitle>
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-6 p-6">
                  <div>
                    <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                      Important
                    </h2>
                    <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
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
                        protect conversations with PII detection, masking, and
                        security monitoring.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-emerald-50/90 p-4 text-xs text-emerald-900 shadow-inner dark:bg-emerald-900/30 dark:text-emerald-50">
                    <p className="mb-2 font-semibold">How DocHat works</p>
                    <ol className="list-decimal space-y-1.5 pl-4 leading-relaxed">
                      <li>Your question is sent securely to the DocHat API.</li>
                      <li>
                        Cencori scans for PII and prompt-injection attempts before
                        the LLM sees your message.
                      </li>
                      <li>
                        A healthcare-focused system prompt guides the model&apos;s
                        response.
                      </li>
                      <li>
                        The answer streams back in real time to this chat window.
                      </li>
                    </ol>
                  </div>

                  <div className="mt-8 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                    Built with Next.js 16, AI SDK, Tailwind CSS v4, shadcn-inspired
                    components, and Cencori as the security and observability layer
                    for all AI calls.
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <ScrollArea className="flex-1 bg-slate-50/50 dark:bg-slate-950/20">
        <div className="flex flex-col gap-4 p-4 lg:p-6">
          {messages.length === 0 && (
            <div className="rounded-2xl border border-dashed border-emerald-200/80 bg-white/70 p-4 text-sm text-muted-foreground shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40">
              <p className="mb-2 font-medium text-emerald-900 dark:text-emerald-50">
                Welcome to DocHat
              </p>
              <p className="mb-3">
                I can help you understand your symptoms, medications, lab
                results, and general health questions. I&apos;ll always respect
                your privacy and recommend when to see a medical professional.
              </p>
              <ul className="grid gap-1.5 text-xs text-emerald-900/80 dark:text-emerald-100/90 sm:grid-cols-2">
                <li className="flex items-start gap-2 rounded-xl bg-emerald-50/70 p-2 dark:bg-emerald-900/40">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
                  <span>&ldquo;I&apos;ve had chest pain for 2 days — should I worry?&rdquo;</span>
                </li>
                <li className="flex items-start gap-2 rounded-xl bg-sky-50/70 p-2 dark:bg-sky-900/40">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
                  <span>&ldquo;What do my A1C and cholesterol numbers mean?&rdquo;</span>
                </li>
                <li className="flex items-start gap-2 rounded-xl bg-emerald-50/70 p-2 dark:bg-emerald-900/40">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
                  <span>&ldquo;Is this medication safe with what I&apos;m already taking?&rdquo;</span>
                </li>
                <li className="flex items-start gap-2 rounded-xl bg-sky-50/70 p-2 dark:bg-sky-900/40">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
                  <span>&ldquo;How can I improve my sleep and manage stress?&rdquo;</span>
                </li>
              </ul>
            </div>
          )}

          {messages.map((message) => {
            const isUser = message.role === "user";
            const isAssistant = message.role === "assistant";

            if (!isUser && !isAssistant) return null;

            // Extract text from message parts (AI SDK v6 format)
            const text = message.parts
              ?.filter((part): part is { type: "text"; text: string } => part.type === "text")
              .map((part) => part.text)
              .join("") ?? "";

            return (
              <div
                key={message.id}
                className={cn(
                  "flex w-full gap-3",
                  isUser ? "justify-end" : "justify-start"
                )}
              >
                {!isUser && (
                  <div className="mt-1.5 flex h-7 w-7 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
                    <Stethoscope className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm",
                    isUser
                      ? "bg-emerald-600 text-emerald-50 rounded-br-sm"
                      : "bg-white/95 text-foreground rounded-bl-sm border border-emerald-100/80 dark:bg-emerald-950/50 dark:border-emerald-900/60"
                  )}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
                <Stethoscope className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5">
                <span className="sr-only">DocHat is typing</span>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 delay-100" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 delay-200" />
              </div>
            </div>
          )}

          {error && (
            <div className="text-xs text-red-600 dark:text-red-400">
              <p>Something went wrong. Please try again in a moment.</p>
              <pre className="mt-2 rounded bg-red-50 p-2 dark:bg-red-950/50">
                {error.name}: {error.message}
              </pre>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 rounded-3xl border border-border bg-card/90 p-2 shadow-sm backdrop-blur"
      >
        <div className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about your health, symptoms, or medications..."
            aria-label="Ask DocHat a health question"
            autoComplete="off"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowUp className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-1 pb-0.5 text-[11px] text-muted-foreground">
          <p>
            DocHat is for educational purposes only and does not provide
            medical diagnosis or treatment.
          </p>
          <p className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-emerald-600 dark:text-emerald-300" />
            <span>Conversations are protected by Cencori security.</span>
          </p>
        </div>
      </form>
    </section>
  );
}
