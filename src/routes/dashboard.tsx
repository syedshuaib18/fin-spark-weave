import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/app-shell";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { ExpenseAnalytics, MonthlyTrend } from "@/components/dashboard/charts";
import { AiInsights } from "@/components/dashboard/ai-insights";
import { InvestmentRecommendations, Goals } from "@/components/dashboard/investments-goals";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { BlockchainVerification, FinancialHealth } from "@/components/dashboard/blockchain-health";

const title = "Dashboard — FinTrust AI";
const description =
  "Track income, expenses, savings and your financial health score with AI insights and on-chain verified reports.";

export const Route = createFileRoute("/dashboard")({
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
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <AppShell title="Good afternoon, Aarav" subtitle="Here's how September is tracking so far.">
      <SummaryCards />
      <div className="grid gap-6 xl:grid-cols-2">
        <ExpenseAnalytics />
        <MonthlyTrend />
      </div>
      <AiInsights />
      <InvestmentRecommendations />
      <Goals />
      <RecentTransactions />
      <div className="grid gap-6 xl:grid-cols-2">
        <FinancialHealth />
        <BlockchainVerification />
      </div>
    </AppShell>
  );
}
