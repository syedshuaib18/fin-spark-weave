import { createFileRoute } from "@tanstack/react-router";
import { LandingNav } from "@/components/landing/landing-nav";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { About, Contact } from "@/components/landing/about-contact";
import { LandingFooter } from "@/components/landing/landing-footer";

const title = "FinTrust AI — Blockchain-Powered Personal Finance Advisor";
const description =
  "FinTrust AI analyzes your spending, cuts unnecessary expenses, recommends personalized investments, and verifies financial reports on-chain.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <LandingFooter />
    </div>
  );
}
