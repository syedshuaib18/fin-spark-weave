import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/finance-data";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Trusted by people who hate spreadsheets
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                {item.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                ))}
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
                  {item.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{item.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
