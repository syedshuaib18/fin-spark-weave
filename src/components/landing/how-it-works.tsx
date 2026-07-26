import { ArrowDown } from "lucide-react";
import { steps } from "@/lib/finance-data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary py-24 text-secondary-foreground">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Four steps to a clearer plan</h2>
        </div>

        <ol className="mt-16 space-y-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div className="group flex items-start gap-6 rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8">
                <span className="gradient-primary grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-semibold text-primary-foreground shadow-glow">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/65">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown className="h-5 w-5 text-primary/70" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
