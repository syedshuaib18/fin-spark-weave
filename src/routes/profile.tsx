import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Download,
  Fingerprint,
  KeyRound,
  Languages,
  Link2,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Trash2,
  Upload,
  Wallet,
} from "lucide-react";
import { AppShell } from "@/components/dashboard/app-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "sonner";

const title = "Profile & Settings — FinTrust AI";
const description =
  "Manage your FinTrust AI profile, connected wallet, bank connections, notifications, security and preferences.";

export const Route = createFileRoute("/profile")({
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
  component: ProfilePage,
});

function Panel({
  title: panelTitle,
  description: panelDescription,
  children,
  id,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h2 className="text-lg font-semibold">{panelTitle}</h2>
      {panelDescription && <p className="mt-1 text-sm text-muted-foreground">{panelDescription}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ToggleRow({
  label,
  hint,
  defaultChecked,
}: {
  label: string;
  hint: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-4 last:border-0">
      <div className="min-w-0">
        <p className="text-sm font-medium">{label}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>
      </div>
      <Switch defaultChecked={defaultChecked} className="shrink-0" />
    </div>
  );
}

function ProfilePage() {
  const [walletConnected, setWalletConnected] = useState(true);

  return (
    <AppShell title="Profile" subtitle="Your identity, connections, security and preferences.">
      <section className="hero-surface rounded-2xl border border-border p-6 shadow-soft sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-5">
            <span className="gradient-primary grid h-20 w-20 shrink-0 place-items-center rounded-3xl text-2xl font-semibold text-primary-foreground shadow-glow">
              AR
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold">Aarav Rao</h2>
              <p className="truncate text-sm text-muted-foreground">aarav.rao@fintrust.ai</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full">
                  Premium plan
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-success/25 bg-success/15 text-success"
                >
                  KYC verified
                </Badge>
              </div>
            </div>
          </div>
          <Button variant="hero" className="shrink-0" onClick={() => toast.success("Profile saved")}>
            Save changes
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { id: "name", label: "Full name", value: "Aarav Rao" },
            { id: "email", label: "Email", value: "aarav.rao@fintrust.ai" },
            { id: "phone", label: "Phone", value: "+1 (415) 555-0188" },
            { id: "income", label: "Monthly income", value: "$8,450" },
            { id: "occupation", label: "Occupation", value: "Senior Data Engineer" },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="text-xs text-muted-foreground">
                {field.label}
              </Label>
              <Input id={field.id} defaultValue={field.value} />
            </div>
          ))}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Risk preference</Label>
            <Select defaultValue="moderate">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conservative">Conservative</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="aggressive">Aggressive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6">
          <Label className="text-xs text-muted-foreground">Financial goals</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Emergency fund", "MacBook Pro", "Vacation 2027", "Early retirement", "Bike"].map(
              (goal) => (
                <Badge key={goal} variant="secondary" className="rounded-full px-3 py-1.5">
                  {goal}
                </Badge>
              ),
            )}
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Connected Wallet" description="Sign report hashes with your own wallet.">
          <div className="rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-warning/15 text-warning">
                <Wallet className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">MetaMask</p>
                <p className="truncate font-mono text-xs text-muted-foreground">
                  {walletConnected ? "0x7A9f42Bd91c05E7a3fD8bA61c4770dE31c" : "Not connected"}
                </p>
              </div>
              <Badge
                variant="outline"
                className={
                  walletConnected
                    ? "shrink-0 rounded-full border-success/25 bg-success/15 text-success"
                    : "shrink-0 rounded-full"
                }
              >
                {walletConnected ? "Connected" : "Offline"}
              </Badge>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="hero"
                size="sm"
                disabled={walletConnected}
                onClick={() => {
                  setWalletConnected(true);
                  toast.success("Wallet connected");
                }}
              >
                <Link2 className="h-4 w-4" />
                Connect Wallet
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={!walletConnected}
                onClick={() => {
                  setWalletConnected(false);
                  toast.info("Wallet disconnected");
                }}
              >
                Disconnect
              </Button>
            </div>
          </div>
        </Panel>

        <Panel title="Bank Connections" description="Read-only access. Revoke at any time.">
          <ul className="space-y-3">
            {[
              { name: "Chase · Everyday Checking", meta: "•••• 4821 · synced 2 min ago" },
              { name: "Amex · Gold Card", meta: "•••• 7702 · synced 12 min ago" },
            ].map((account) => (
              <li
                key={account.name}
                className="flex items-center gap-3 rounded-xl border border-border p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                  <Building2 className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{account.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{account.meta}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="shrink-0"
                  onClick={() => toast.success("Sync started")}
                >
                  <RefreshCw className="h-4 w-4" />
                  Sync
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-dashed border-border p-6 text-center">
            <Upload className="mx-auto h-5 w-5 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium">Upload a CSV statement</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Drag and drop, or browse — up to 10 MB per file.
            </p>
            <Button
              variant="soft"
              size="sm"
              className="mt-4"
              onClick={() => toast.success("Statement queued for parsing")}
            >
              Choose file
            </Button>
          </div>
        </Panel>

        <Panel title="Notifications" description="Choose what reaches your inbox and phone.">
          <ToggleRow label="Budget alerts" hint="When a category hits 90% of its cap." defaultChecked />
          <ToggleRow label="Investment alerts" hint="SIP executions and rebalance nudges." defaultChecked />
          <ToggleRow label="Goal alerts" hint="Milestones and pacing warnings." defaultChecked />
          <ToggleRow label="AI suggestions" hint="Weekly digest of new insights." />
        </Panel>

        <Panel title="Security" description="Protect your account and active sessions.">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-4">
            <div className="flex min-w-0 items-center gap-3">
              <ShieldCheck className="h-4 w-4 shrink-0 text-success" />
              <div className="min-w-0">
                <p className="text-sm font-medium">Two-factor authentication</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Authenticator app · enabled</p>
              </div>
            </div>
            <Switch defaultChecked className="shrink-0" />
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-4">
            <div className="flex min-w-0 items-center gap-3">
              <KeyRound className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="text-sm font-medium">Password</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Last changed 3 months ago</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => toast.info("Password reset link sent")}
            >
              Change
            </Button>
          </div>
          <ToggleRow label="Biometric login" hint="Face ID and fingerprint on trusted devices." defaultChecked />
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <Monitor className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <p className="text-sm font-medium">Sessions</p>
                <p className="mt-0.5 text-xs text-muted-foreground">3 devices · San Francisco, Lisbon</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="shrink-0 text-destructive"
              onClick={() => toast.success("Other sessions signed out")}
            >
              Sign out all
            </Button>
          </div>
        </Panel>
      </div>

      <Panel title="Preferences" description="Currency, language, theme, privacy and your data.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD · US Dollar</SelectItem>
                <SelectItem value="eur">EUR · Euro</SelectItem>
                <SelectItem value="inr">INR · Indian Rupee</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Theme</Label>
            <div className="flex items-center gap-3 rounded-xl border border-border px-3 py-2">
              <Languages className="hidden h-4 w-4 text-muted-foreground" />
              <Fingerprint className="hidden h-4 w-4" />
              <span className="flex-1 text-sm">Light / dark</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-0">
          <ToggleRow
            label="Private mode"
            hint="Blur balances when screen-sharing or casting."
          />
          <ToggleRow
            label="Anonymized model training"
            hint="Help improve category detection. No raw data leaves your vault."
            defaultChecked
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast.success("Export ready — check your email")}>
            <Download className="h-4 w-4" />
            Export data
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4" />
                Delete account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete your FinTrust AI account?</AlertDialogTitle>
                <AlertDialogDescription>
                  This removes your profile, connections and insights. On-chain report hashes remain
                  permanently public.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => toast.error("Account deletion scheduled")}>
                  Delete account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Panel>
    </AppShell>
  );
}
