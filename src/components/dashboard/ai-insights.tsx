import {
  Repeat,
  Shield,
  ShoppingBag,
  Sparkles,
  Utensils,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { aiInsights } from "@/lib/finance-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const icons: Record<string, LucideIcon> = {
  utensils: Utensils,
  shopping: ShoppingBag,
  sparkles: Sparkles,
  repeat: Repeat,
  zap: Zap,
  shield: Shield,
};

const tones: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  warning: "bg-warning/15 text-warning",
  info: "bg-info/15 text-info",
  destructive: "bg-destructive/12 text-destructive",
  success: "bg-success/15 text-success",
};

export function AiInsights() {
  return (
    <section id="insights" className="scroll-mt-28">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold">AI Insights</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Six findings from this month's transactions
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          Updated hourly
        </span>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {aiInsights.map((insight, index) => {
          const Icon = icons[insight.icon];
          return (
            <article
              key={insight.id}
              className="card-lift flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${index * 60}ms` }}
            >
              <span
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-xl",
                  tones[insight.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[15px] font-semibold">{insight.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {insight.description}
              </p>
              <Button
                variant="soft"
                size="sm"
                className="mt-5 self-start"
                onClick={() => toast.success(insight.action, { description: insight.title })}
              >
                {insight.action}
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
