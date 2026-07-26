import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.png";

const badges = [
  { label: "Bank-grade encryption" },
  { label: "On-chain verified reports" },
  { label: "No card required" },
];

export function Hero() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden pt-36 pb-24 lg:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI + blockchain personal finance
          </span>

          <h1 className="mt-6 text-4xl leading-[1.06] font-semibold sm:text-5xl lg:text-[3.75rem]">
            Turn Everyday Spending Into{" "}
            <span className="text-gradient">Smarter Investing</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            FinTrust AI analyzes your spending, identifies unnecessary expenses, recommends
            personalized investments, and securely verifies financial reports using blockchain
            technology.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#how-it-works">
                <PlayCircle className="h-4 w-4" />
                Watch Demo
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-scale-in relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 top-10 bottom-10 rounded-4xl bg-primary/20 blur-3xl"
          />
          <img
            src={heroImage}
            alt="FinTrust AI dashboard showing portfolio growth, spending breakdown and connected cards"
            width={1280}
            height={1024}
            className="animate-float relative w-full drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-border bg-card/70 p-8 shadow-soft backdrop-blur-sm sm:grid-cols-3">
          {[
            { value: "$420M+", label: "Spending analyzed by our models" },
            { value: "128,000", label: "Reports hashed on-chain" },
            { value: "31%", label: "Average savings-rate improvement" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
