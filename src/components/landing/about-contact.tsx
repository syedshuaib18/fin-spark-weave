import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Lock, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">About</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Built by engineers who audit their own numbers
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            FinTrust AI started as an internal tool for verifying financial statements without
            handing raw transaction data to third parties. Today it pairs a spending model trained on
            anonymized behaviour with an on-chain notarization layer, so every insight you act on can
            be independently proven.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Lock,
                title: "Read-only by design",
                body: "We never hold funds and never initiate payments.",
              },
              {
                icon: Building2,
                title: "Enterprise controls",
                body: "SOC 2 aligned processes, audit logs, and SSO ready.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <dt className="text-sm font-semibold">{item.title}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{item.body}</dd>
                </div>
              </div>
            ))}
          </dl>

          <Button variant="soft" className="mt-10" asChild>
            <Link to="/dashboard">
              Explore the live dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { value: "2021", label: "Founded" },
            { value: "18", label: "Countries supported" },
            { value: "99.98%", label: "Uptime last 12 months" },
            { value: "$0", label: "Custody of your money" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="card-lift rounded-2xl border border-border bg-card p-8 shadow-soft"
              style={{ animation: "var(--animate-fade-up)", animationDelay: `${index * 80}ms` }}
            >
              <p className="text-3xl font-semibold tracking-tight text-primary">{item.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="hero-surface overflow-hidden rounded-3xl border border-border shadow-soft">
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Talk to the team</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Questions about onboarding, security reviews, or blockchain verification? We reply
                within one business day.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  hello@fintrust.ai
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  Remote-first · HQ in Lisbon
                </li>
              </ul>
            </div>

            <form
              className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                toast.success("Message sent", {
                  description: "Our team will get back to you within one business day.",
                });
                (event.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                    Full name
                  </label>
                  <Input id="name" placeholder="Ada Lovelace" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                    Work email
                  </label>
                  <Input id="email" type="email" placeholder="ada@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                  How can we help?
                </label>
                <Textarea id="message" rows={4} placeholder="Tell us about your setup…" required />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
