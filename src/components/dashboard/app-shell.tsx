import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  ChevronLeft,
  CreditCard,
  FileBarChart,
  LayoutDashboard,
  LogOut,
  Menu,
  PiggyBank,
  Search,
  Settings,
  Sparkles,
  Target,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiChatbot } from "@/components/dashboard/ai-chatbot";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type NavItem = { label: string; icon: LucideIcon; to?: string; hash?: string };

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Transactions", icon: CreditCard, hash: "transactions" },
  { label: "AI Advisor", icon: Sparkles, hash: "insights" },
  { label: "Investments", icon: PiggyBank, hash: "investments" },
  { label: "Goals", icon: Target, hash: "goals" },
  { label: "Reports", icon: FileBarChart, hash: "blockchain" },
  { label: "Profile", icon: User, to: "/profile" },
  { label: "Settings", icon: Settings, to: "/profile", hash: "preferences" },
];

const notifications = [
  { title: "Budget alert", body: "Food category is at 92% of its monthly cap." },
  { title: "Investment", body: "Your index SIP of $300 executes tomorrow." },
  { title: "Goal", body: "Emergency Fund reached 80% — nice pace." },
];

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const sidebar = (
    <div className="flex h-full flex-col gap-6 py-6">
      <div className={cn("flex items-center px-5", collapsed && "lg:justify-center lg:px-0")}>
        <Logo to="/dashboard" compact={collapsed} />
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const active = item.to === pathname && !item.hash;
          const content = (
            <>
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </>
          );
          const className = cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
            active
              ? "bg-primary-soft text-primary shadow-soft"
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            collapsed && "lg:justify-center lg:px-0",
          );

          return item.to ? (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className={className}
              title={item.label}
              onClick={() => setMobileOpen(false)}
            >
              {content}
            </Link>
          ) : (
            <a
              key={item.label}
              href={`#${item.hash}`}
              className={className}
              title={item.label}
              onClick={() => setMobileOpen(false)}
            >
              {content}
            </a>
          );
        })}
      </nav>

      <div className="px-3">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
            collapsed && "lg:justify-center lg:px-0",
          )}
        >
          <LogOut className="h-4.5 w-4.5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 hidden border-r border-sidebar-border bg-sidebar transition-[width] duration-300 lg:block",
          collapsed ? "w-20" : "w-64",
        )}
      >
        {sidebar}
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed((v) => !v)}
          className="absolute top-7 -right-4 h-8 w-8 rounded-full"
        >
          <ChevronLeft
            className={cn("h-4 w-4 transition-transform duration-300", collapsed && "rotate-180")}
          />
        </Button>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="animate-fade-in absolute inset-y-0 left-0 w-72 border-r border-sidebar-border bg-sidebar">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close navigation"
              className="absolute top-5 right-3"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            {sidebar}
          </div>
        </div>
      )}

      <div className={cn("transition-[padding] duration-300", collapsed ? "lg:pl-20" : "lg:pl-64")}>
        <header className="glass sticky top-0 z-30 border-b border-border">
          <div className="flex h-18 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="relative hidden max-w-sm flex-1 sm:block">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search transactions, goals, insights…"
                className="h-10 rounded-xl pl-9"
              />
            </div>

            <div className="ml-auto flex items-center gap-1.5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="animate-pulse-ring absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 rounded-2xl">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((n) => (
                    <DropdownMenuItem key={n.title} className="flex-col items-start gap-1 py-3">
                      <span className="text-sm font-medium">{n.title}</span>
                      <span className="text-xs text-muted-foreground">{n.body}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-1 flex items-center gap-2.5 rounded-xl border border-border bg-card px-2 py-1.5 text-left transition-colors hover:border-primary/40">
                    <span className="gradient-primary grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-semibold text-primary-foreground">
                      AR
                    </span>
                    <span className="hidden min-w-0 sm:block">
                      <span className="block truncate text-xs font-semibold">Aarav Rao</span>
                      <span className="block truncate text-[11px] text-muted-foreground">
                        Premium plan
                      </span>
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52 rounded-2xl">
                  <DropdownMenuLabel>My account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.info("Settings live on the profile page.")}>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="animate-fade-in px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
              <div className="min-w-0">
                <h1 className="truncate text-2xl font-semibold sm:text-[28px]">{title}</h1>
                <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
              </div>
              <Badge variant="outline" className="shrink-0 gap-1.5 rounded-full py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Synced 2 min ago
              </Badge>
            </div>

            <div className="mt-8 space-y-8">{children}</div>
          </div>
        </main>
      </div>

      <AiChatbot />
    </div>
  );
}
