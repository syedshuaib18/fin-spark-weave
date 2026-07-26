import { BadgeCheck, Copy, ExternalLink, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { blockchainRecord, healthMetrics } from "@/lib/finance-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function BlockchainVerification() {
  return (
    <section
      id="blockchain"
      className="gradient-navy scroll-mt-28 overflow-hidden rounded-2xl p-6 text-secondary-foreground shadow-lift sm:p-8"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary-foreground/10">
            <Fingerprint className="h-5 w-5 text-primary" />
          </span>
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold">Blockchain Verification</h2>
            <p className="truncate text-xs text-secondary-foreground/60">
              {blockchainRecord.network} · Block {blockchainRecord.block}
            </p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary">
          <BadgeCheck className="h-4 w-4" />
          Verified
        </span>
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-5">
          <dt className="text-[11px] tracking-wide text-secondary-foreground/55 uppercase">
            Wallet address
          </dt>
          <dd className="mt-2 font-mono text-sm">{blockchainRecord.wallet}</dd>
        </div>
        <div className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-5">
          <dt className="text-[11px] tracking-wide text-secondary-foreground/55 uppercase">
            Latest block hash
          </dt>
          <dd className="mt-2 flex items-center gap-2">
            <span className="min-w-0 truncate font-mono text-sm">{blockchainRecord.hash}</span>
            <button
              aria-label="Copy hash"
              className="shrink-0 text-secondary-foreground/60 transition-colors hover:text-primary"
              onClick={() => toast.success("Hash copied to clipboard")}
            >
              <Copy className="h-4 w-4" />
            </button>
          </dd>
        </div>
        <div className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-5">
          <dt className="text-[11px] tracking-wide text-secondary-foreground/55 uppercase">
            Timestamp
          </dt>
          <dd className="mt-2 text-sm">{blockchainRecord.timestamp}</dd>
        </div>
      </dl>

      <Button
        variant="hero"
        className="mt-8"
        onClick={() => toast.info("Opening block explorer", { description: blockchainRecord.block })}
      >
        View Blockchain
        <ExternalLink className="h-4 w-4" />
      </Button>
    </section>
  );
}

const toneColor: Record<string, string> = {
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
};

export function FinancialHealth() {
  const score = 78;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section className="min-w-0 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h2 className="text-lg font-semibold">Financial Health</h2>
      <p className="mt-1 text-sm text-muted-foreground">Weighted across four pillars</p>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        <div className="relative mx-auto grid h-40 w-40 place-items-center">
          <svg viewBox="0 0 128 128" className="h-40 w-40 -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="54"
              fill="none"
              stroke="var(--color-muted)"
              strokeWidth="10"
            />
            <circle
              cx="64"
              cy="64"
              r="54"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)" }}
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-3xl font-semibold tracking-tight">{score}</p>
            <p className="text-xs text-muted-foreground">out of 100</p>
          </div>
        </div>

        <ul className="min-w-0 space-y-5">
          {healthMetrics.map((metric) => (
            <li key={metric.label}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="min-w-0 truncate text-sm">{metric.label}</span>
                <span className={cn("shrink-0 text-sm font-semibold", toneColor[metric.tone])}>
                  {metric.display}
                </span>
              </div>
              <Progress value={metric.value} className="mt-2 h-1.5" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
