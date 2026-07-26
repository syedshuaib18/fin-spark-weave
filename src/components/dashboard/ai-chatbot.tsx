import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = { id: number; from: "ai" | "user"; text: string };

const suggestions = [
  "Where can I cut spending?",
  "Am I on track for my goals?",
  "How much should I invest?",
];

const replies = [
  "Based on the last 90 days you can safely redirect $300/month into an index SIP without touching your fixed costs.",
  "Your Emergency Fund is 80% funded. Adding $200/month closes the gap by January 2027.",
  "Food and shopping are your two fastest-growing categories — a $150 combined cap recovers most of the drift.",
];

export function AiChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "ai",
      text: "Hi! I'm FinTrust AI. How can I improve your finances today?",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length, from: "user", text: value },
      { id: prev.length + 1, from: "ai", text: replies[prev.length % replies.length] },
    ]);
    setInput("");
  };

  return (
    <>
      <Button
        variant="hero"
        size="icon"
        aria-label="Open FinTrust AI assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed right-6 bottom-6 z-50 h-14 w-14 rounded-full"
      >
        {open ? <X className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="animate-scale-in fixed right-6 bottom-24 z-50 flex h-[26rem] w-[min(22rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="gradient-navy flex items-center gap-3 px-5 py-4 text-secondary-foreground">
            <span className="gradient-primary grid h-9 w-9 place-items-center rounded-xl text-primary-foreground">
              <Bot className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">FinTrust AI</p>
              <p className="truncate text-[11px] text-secondary-foreground/60">
                Always-on finance copilot
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed",
                  message.from === "ai"
                    ? "bg-muted text-foreground"
                    : "ml-auto bg-primary text-primary-foreground",
                )}
              >
                {message.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
            >
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask anything…"
                className="h-10 rounded-xl"
              />
              <Button type="submit" variant="hero" size="icon" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
