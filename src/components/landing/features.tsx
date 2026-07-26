import {
  Brain,
  Gauge,
  Lightbulb,
  Link2,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/finance-data";

const icons: Record<string, LucideIcon> = {
  brain: Brain,
  trending: TrendingUp,
  gauge: Gauge,
  target: Target,
  link: Link2,
  lightbulb: Lightbulb,
};

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Features</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Everything you need to move from tracking to compounding
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Six systems working together — analysis, advice, and proof.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <article
                key={feature.title}
                className="card-lift group relative rounded-2xl border border-border bg-card p-8 shadow-soft"
                style={{ animation: `var(--animate-fade-up)`, animationDelay: `${index * 70}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
