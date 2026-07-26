import { Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/brand/logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A blockchain-powered personal finance advisor that turns everyday spending into
              smarter investing.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FinTrust AI. Demo product for illustration purposes.
        </p>
      </div>
    </footer>
  );
}
