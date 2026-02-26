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
    <section className="flex h-full flex-col gap-0 lg:gap-4">
      <header className="flex items-center justify-between gap-3 bg-black px-4 py-3 lg:rounded-3xl lg:bg-zinc-900/50">
        <div className="flex items-center gap-3">
          {/* Mobile Left Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-zinc-400 hover:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 border-r border-zinc-800/40 bg-zinc-900">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-6 p-6">
                  <div className="space-y-4">
                    <p className="inline-flex w-fit items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                      DocHat · Healthcare Chatbot
                    </p>
                    <h1 className="text-balance text-2xl font-semibold tracking-tight text-white">
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

                  <div className="mt-4 flex flex-col items-start gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-50 shadow-md">
                    <p className="font-semibold text-emerald-400">Secured by Cencori</p>
                    <p className="text-xs opacity-90 leading-relaxed text-emerald-200/70">
                      AI firewall for healthcare data: PII masking, prompt-injection
                      protection, and encrypted routing across LLM providers.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-black shadow-sm">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-white">
              DocHat Assistant
            </h2>
            <p className="text-[11px] text-zinc-400 sm:text-xs">
              Secure, evidence-based health guidance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400 sm:px-3 sm:text-xs">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Cencori Protected</span>
            <span className="sm:hidden">Protected</span>
          </div>

          {/* Mobile Right Info Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-zinc-400 hover:text-white">
                <Info className="h-5 w-5" />
                <span className="sr-only">Important Info</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l border-zinc-800/40 bg-zinc-900">
              <SheetTitle className="sr-only">Important Information</SheetTitle>
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-6 p-6">
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

                  <div className="mt-8 text-[11px] leading-relaxed text-zinc-600">
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

      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-4 p-4 lg:p-6">
          {messages.length === 0 && (
            <div className="rounded-2xl p-4 text-sm text-zinc-400 bg-zinc-900/30">
              <p className="mb-2 font-medium text-emerald-400">
                Welcome to DocHat
              </p>
              <p className="mb-4">
                I can help you understand your symptoms, medications, lab
                results, and general health questions. I&apos;ll always respect
                your privacy and recommend when to see a medical professional.
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "“I've had chest pain for 2 days — should I worry?”",
                  "“What do my A1C and cholesterol numbers mean?”",
                  "“Is this medication safe with what I'm already taking?”",
                  "“How can I improve my sleep and manage stress?”",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="flex items-start gap-2 rounded-xl bg-zinc-900/50 p-3 text-left hover:bg-zinc-800/80 hover:text-emerald-400 transition-colors"
                  >
                    <span className="text-[13px] text-zinc-300">{suggestion}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => {
            const isUser = m.role === "user";
            const isAssistant = m.role === "assistant";

            if (!isUser && !isAssistant) return null;

            // Extract text from message parts (AI SDK v6 format)
            const text = m.parts
              ?.filter((part): part is { type: "text"; text: string } => part.type === "text")
              .map((part) => part.text)
              .join("") ?? "";

            return (
              <div
                key={m.id}
                className={cn("flex w-full flex-col", {
                  "items-end": isUser,
                })}
              >
                <div
                  className={cn("flex w-full max-w-3xl gap-3", {
                    "mb-2 flex-row-reverse": isUser,
                  })}
                >
                  {isAssistant && (
                    <div className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-black shadow-sm">
                      <Stethoscope className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={cn("flex flex-col gap-1", {
                      "items-end": isUser,
                    })}
                  >
                    {isAssistant ? (
                      <div className="prose prose-sm prose-invert prose-emerald sm:ml-9 max-w-[95%] sm:max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-zinc-300 sm:max-w-prose">
                        <p className="whitespace-pre-wrap leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ) : (
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-zinc-800 px-4 py-3 text-[15px] text-white shadow-sm sm:max-w-prose">
                        <p className="whitespace-pre-wrap leading-relaxed">
                          {text}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {status === "submitted" && (
            <div className="flex w-full max-w-3xl gap-3">
              <div className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-black shadow-sm">
                <Stethoscope className="h-4 w-4" />
              </div>
              <div className="flex items-center sm:ml-9 rounded-2xl rounded-tl-sm px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
              </div>
            </div>
          )}

          {error && (
            <div className="mx-auto mt-4 w-full max-w-2xl rounded-2xl border border-red-900/50 bg-red-950/20 p-4 text-sm text-red-500">
              <p className="font-semibold">
                Something went wrong. Please try again in a moment.
              </p>
              <pre className="mt-2 rounded bg-black/50 p-2 text-red-400">
                {error.name}: {error.message}
              </pre>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="bg-black p-4 lg:rounded-b-3xl lg:p-6 lg:bg-zinc-900/10">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center overflow-hidden rounded-full bg-zinc-900 shadow-sm focus-within:ring-1 focus-within:ring-emerald-500/50"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about your health, symptoms, or medications..."
            className="flex-1 border-0 bg-transparent px-5 py-6 text-[15px] text-white shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-zinc-500"
            aria-label="Ask DocHat a health question"
            autoComplete="off"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 h-[38px] w-[38px] shrink-0 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <ArrowUp className="h-5 w-5" />
            )}
          </Button>
        </form>

        <div className="mt-3 flex items-center justify-between px-2 text-[10px] text-zinc-500 lg:text-[11px]">
          <p>
            DocHat is for educational purposes only and does not provide medical diagnosis or treatment.
          </p>
          <p className="hidden flex items-center gap-1.5 font-medium text-emerald-500 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5" />
            Conversations are protected by Cencori security.
          </p>
        </div>
      </div>
    </section>
  );
}
