import { Bike, Info, Laptop, Plane, Shield, TrendingUp, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { goals, investments } from "@/lib/finance-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const riskTone: Record<string, string> = {
  Low: "bg-success/15 text-success border-success/25",
  Moderate: "bg-info/15 text-info border-info/25",
  High: "bg-warning/15 text-warning border-warning/25",
};

export function InvestmentRecommendations() {
  return (
    <section id="investments" className="scroll-mt-28">
      <header>
        <h2 className="text-lg font-semibold">Investment Recommendations</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Matched to a moderate risk profile and a 12-year horizon
        </p>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {investments.map((item, index) => (
          <article
            key={item.id}
            className="card-lift flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
            style={{ animation: "var(--animate-fade-up)", animationDelay: `${index * 70}ms` }}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold">{item.name}</h3>
                <p className="mt-1 truncate text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
              <Badge variant="outline" className={cn("shrink-0 rounded-full", riskTone[item.risk])}>
                {item.risk} risk
              </Badge>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-muted/60 p-4">
                <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">
                  Recommended monthly
                </dt>
                <dd className="mt-1 text-xl font-semibold">{item.monthly}</dd>
              </div>
              <div className="rounded-xl bg-muted/60 p-4">
                <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">
                  Expected annual return
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-xl font-semibold text-primary">
                  <TrendingUp className="h-4 w-4" />
                  {item.returns}
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-1 items-start gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>Why FinTrust AI suggested this</TooltipContent>
              </Tooltip>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.reason}</p>
            </div>

            <Button
              variant="hero"
              className="mt-6 w-full"
              onClick={() =>
                toast.success("Plan started", {
                  description: `${item.name} · ${item.monthly} per month`,
                })
              }
            >
              Start Plan
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

const goalIcons: Record<string, LucideIcon> = {
  laptop: Laptop,
  plane: Plane,
  shield: Shield,
  bike: Bike,
};

export function Goals() {
  return (
    <section id="goals" className="scroll-mt-28">
      <header>
        <h2 className="text-lg font-semibold">Goals</h2>
        <p className="mt-1 text-sm text-muted-foreground">Four active savings goals</p>
      </header>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {goals.map((goal, index) => {
          const Icon = goalIcons[goal.icon];
          const percent = Math.round((goal.saved / goal.target) * 100);
          return (
            <article
              key={goal.id}
              className="card-lift rounded-2xl border border-border bg-card p-6 shadow-soft"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="min-w-0 truncate text-sm font-semibold">{goal.name}</h3>
              </div>

              <p className="mt-5 text-2xl font-semibold tracking-tight">
                ${goal.saved.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  / ${goal.target.toLocaleString()}
                </span>
              </p>

              <Progress value={percent} className="mt-4 h-2" />

              <dl className="mt-5 space-y-2 text-xs">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Remaining</dt>
                  <dd className="font-medium">${(goal.target - goal.saved).toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Progress</dt>
                  <dd className="font-medium text-primary">{percent}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Est. completion</dt>
                  <dd className="font-medium">{goal.eta}</dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </section>
  );
}
