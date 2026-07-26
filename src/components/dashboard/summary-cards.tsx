import { ArrowDownRight, ArrowUpRight, Gauge, PiggyBank, TrendingDown, Wallet } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { summary } from "@/lib/finance-data";
import { cn } from "@/lib/utils";

const icons = [Wallet, TrendingDown, PiggyBank, Gauge];

const toneClasses: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  warning: "bg-warning/15 text-warning",
  info: "bg-info/15 text-info",
  success: "bg-success/15 text-success",
};

const strokes: Record<string, string> = {
  primary: "var(--color-primary)",
  warning: "var(--color-warning)",
  info: "var(--color-info)",
  success: "var(--color-success)",
};

export function SummaryCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {summary.map((card, index) => {
        const Icon = icons[index];
        const data = card.spark.map((value, i) => ({ i, value }));
        return (
          <article
            key={card.id}
            className="card-lift rounded-2xl border border-border bg-card p-6 shadow-soft"
            style={{ animation: "var(--animate-fade-up)", animationDelay: `${index * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className={cn("grid h-11 w-11 place-items-center rounded-xl", toneClasses[card.tone])}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                  card.trend === "up" ? "bg-success/12 text-success" : "bg-destructive/12 text-destructive",
                )}
              >
                {card.trend === "up" ? (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                ) : (
                  <ArrowDownRight className="h-3.5 w-3.5" />
                )}
                {card.delta}
              </span>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">{card.label}</p>
            <p className="mt-1 text-[28px] font-semibold tracking-tight">{card.value}</p>

            <div className="mt-4 h-14">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 4, bottom: 0, left: 0, right: 0 }}>
                  <defs>
                    <linearGradient id={`spark-${card.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={strokes[card.tone]} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={strokes[card.tone]} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={strokes[card.tone]}
                    strokeWidth={2}
                    fill={`url(#spark-${card.id})`}
                    isAnimationActive
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>
        );
      })}
    </section>
  );
}
