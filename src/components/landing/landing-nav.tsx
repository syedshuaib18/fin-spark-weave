import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-6 py-4 lg:px-8">
        <Logo />

        <div className="ml-6 hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/dashboard">Login</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/dashboard">Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="glass animate-fade-in border-t border-border px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="sm" className="mt-2" asChild>
              <Link to="/dashboard">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
