/**
 * Static demo data for the FinTrust AI product surfaces.
 * Presentation-only mock content — no backend involved.
 */

export const summary = [
  {
    id: "income",
    label: "Monthly Income",
    value: "$8,450",
    delta: "+4.2%",
    trend: "up" as const,
    tone: "primary" as const,
    spark: [42, 44, 43, 47, 46, 49, 52, 51, 55, 58, 57, 61],
  },
  {
    id: "expenses",
    label: "Monthly Expenses",
    value: "$5,120",
    delta: "+8.6%",
    trend: "up" as const,
    tone: "warning" as const,
    spark: [38, 36, 40, 39, 44, 42, 46, 49, 47, 52, 55, 58],
  },
  {
    id: "savings",
    label: "Monthly Savings",
    value: "$3,330",
    delta: "-2.1%",
    trend: "down" as const,
    tone: "info" as const,
    spark: [30, 34, 33, 38, 36, 35, 39, 37, 41, 38, 36, 34],
  },
  {
    id: "score",
    label: "Financial Health Score",
    value: "78/100",
    delta: "+6 pts",
    trend: "up" as const,
    tone: "success" as const,
    spark: [58, 60, 61, 63, 64, 66, 68, 69, 72, 74, 76, 78],
  },
];

export const expenseCategories = [
  { name: "Food", value: 1240, color: "var(--color-chart-1)" },
  { name: "Shopping", value: 860, color: "var(--color-chart-2)" },
  { name: "Transport", value: 420, color: "var(--color-chart-3)" },
  { name: "Entertainment", value: 310, color: "var(--color-chart-4)" },
  { name: "Healthcare", value: 280, color: "var(--color-chart-5)" },
  { name: "Bills", value: 940, color: "var(--color-chart-6)" },
  { name: "Education", value: 370, color: "var(--color-chart-7)" },
  { name: "Investments", value: 700, color: "var(--color-chart-8)" },
];

export const monthlyTrend = [
  { month: "Jan", income: 7600, expenses: 4900, savings: 2700 },
  { month: "Feb", income: 7800, expenses: 5100, savings: 2700 },
  { month: "Mar", income: 7900, expenses: 4700, savings: 3200 },
  { month: "Apr", income: 8100, expenses: 5300, savings: 2800 },
  { month: "May", income: 8000, expenses: 4800, savings: 3200 },
  { month: "Jun", income: 8250, expenses: 5000, savings: 3250 },
  { month: "Jul", income: 8300, expenses: 5400, savings: 2900 },
  { month: "Aug", income: 8400, expenses: 5150, savings: 3250 },
  { month: "Sep", income: 8450, expenses: 5120, savings: 3330 },
];

export const aiInsights = [
  {
    id: "food",
    icon: "utensils" as const,
    title: "Food spending up 18%",
    description: "You spent 18% more on food this month, mostly on weekday delivery orders.",
    action: "Set food budget",
    tone: "warning" as const,
  },
  {
    id: "shopping",
    icon: "shopping" as const,
    title: "Shopping increased by $120",
    description: "Three unplanned purchases pushed your shopping category above your average.",
    action: "Review purchases",
    tone: "info" as const,
  },
  {
    id: "invest",
    icon: "sparkles" as const,
    title: "You can invest $300 monthly",
    description: "Trimming discretionary spending frees up $300 every month for an index SIP.",
    action: "Start investing",
    tone: "primary" as const,
  },
  {
    id: "subs",
    icon: "repeat" as const,
    title: "Unused subscriptions detected",
    description: "Two subscriptions haven't been used in 60 days — $34/month recoverable.",
    action: "Cancel now",
    tone: "destructive" as const,
  },
  {
    id: "power",
    icon: "zap" as const,
    title: "Electricity bill above average",
    description: "Your utility bill is 22% higher than the last six-month average.",
    action: "See breakdown",
    tone: "warning" as const,
  },
  {
    id: "emergency",
    icon: "shield" as const,
    title: "Emergency fund almost ready",
    description: "You're 2 months away from a fully funded 6-month safety net.",
    action: "Boost fund",
    tone: "success" as const,
  },
];

export const investments = [
  {
    id: "index",
    name: "Index Fund SIP",
    subtitle: "Broad market · Nifty 500 equivalent",
    monthly: "$300",
    returns: "11.8%",
    risk: "Moderate" as const,
    reason: "Best long-term compounding fit for your 12-year horizon and steady income.",
  },
  {
    id: "etf",
    name: "Global Tech ETF",
    subtitle: "Equity · Developed markets",
    monthly: "$150",
    returns: "14.2%",
    risk: "High" as const,
    reason: "Adds international exposure — your portfolio is 92% domestic today.",
  },
  {
    id: "debt",
    name: "Short-Term Debt Fund",
    subtitle: "Fixed income · 1–3 year duration",
    monthly: "$200",
    returns: "7.1%",
    risk: "Low" as const,
    reason: "Parks your emergency buffer with better yield than a savings account.",
  },
  {
    id: "gold",
    name: "Digital Gold Plan",
    subtitle: "Commodity · Inflation hedge",
    monthly: "$80",
    returns: "8.4%",
    risk: "Low" as const,
    reason: "A 5% allocation smooths volatility during equity drawdowns.",
  },
];

export const goals = [
  {
    id: "macbook",
    name: "MacBook Pro",
    icon: "laptop" as const,
    target: 2400,
    saved: 1680,
    eta: "Mar 2027",
  },
  { id: "vacation", name: "Vacation", icon: "plane" as const, target: 3500, saved: 1225, eta: "Aug 2027" },
  {
    id: "emergency",
    name: "Emergency Fund",
    icon: "shield" as const,
    target: 12000,
    saved: 9600,
    eta: "Jan 2027",
  },
  { id: "bike", name: "Bike", icon: "bike" as const, target: 1800, saved: 540, eta: "Nov 2027" },
];

export const transactions = [
  {
    id: "t1",
    merchant: "Whole Foods Market",
    category: "Food",
    amount: -128.4,
    date: "Sep 24, 2026",
    status: "Completed" as const,
  },
  {
    id: "t2",
    merchant: "Apple Store",
    category: "Shopping",
    amount: -349.0,
    date: "Sep 23, 2026",
    status: "Completed" as const,
  },
  {
    id: "t3",
    merchant: "Monthly Payroll",
    category: "Investments",
    amount: 8450.0,
    date: "Sep 21, 2026",
    status: "Completed" as const,
  },
  {
    id: "t4",
    merchant: "Uber",
    category: "Transport",
    amount: -24.75,
    date: "Sep 20, 2026",
    status: "Pending" as const,
  },
  {
    id: "t5",
    merchant: "City Power & Light",
    category: "Bills",
    amount: -186.2,
    date: "Sep 19, 2026",
    status: "Completed" as const,
  },
  {
    id: "t6",
    merchant: "Coursera",
    category: "Education",
    amount: -59.0,
    date: "Sep 18, 2026",
    status: "Completed" as const,
  },
  {
    id: "t7",
    merchant: "CineWorld",
    category: "Entertainment",
    amount: -32.5,
    date: "Sep 17, 2026",
    status: "Failed" as const,
  },
  {
    id: "t8",
    merchant: "MedPlus Pharmacy",
    category: "Healthcare",
    amount: -74.9,
    date: "Sep 16, 2026",
    status: "Completed" as const,
  },
];

export const categoryColor: Record<string, string> = {
  Food: "var(--color-chart-1)",
  Shopping: "var(--color-chart-2)",
  Transport: "var(--color-chart-3)",
  Entertainment: "var(--color-chart-4)",
  Healthcare: "var(--color-chart-5)",
  Bills: "var(--color-chart-6)",
  Education: "var(--color-chart-7)",
  Investments: "var(--color-chart-8)",
};

export const healthMetrics = [
  { label: "Savings Rate", value: 39, display: "39%", tone: "success" as const },
  { label: "Debt Ratio", value: 18, display: "18%", tone: "success" as const },
  { label: "Investment Consistency", value: 72, display: "72%", tone: "info" as const },
  { label: "Emergency Fund Status", value: 80, display: "4.8 / 6 months", tone: "warning" as const },
];

export const blockchainRecord = {
  wallet: "0x7A9f...E31c",
  hash: "0x8f2b41c7d0a9e5b6134fa72c98de5501b7c33a19f6d820e4c5719ab3f0e6d284",
  timestamp: "Sep 25, 2026 · 14:32 UTC",
  network: "Polygon Mainnet",
  block: "#62,481,930",
};

export const features = [
  {
    icon: "brain" as const,
    title: "AI Expense Analysis",
    description: "Analyze daily spending with models that learn your habits and flag drift early.",
  },
  {
    icon: "trending" as const,
    title: "Investment Advisor",
    description: "Suggest SIPs, ETFs, mutual funds, and savings strategies matched to your risk profile.",
  },
  {
    icon: "gauge" as const,
    title: "Financial Health Score",
    description: "One overall wellness score built from savings rate, debt load, and consistency.",
  },
  {
    icon: "target" as const,
    title: "Goal Planner",
    description: "Track goals like a car, laptop, vacation, or emergency fund with live pacing.",
  },
  {
    icon: "link" as const,
    title: "Blockchain Verification",
    description: "Store financial report hashes on-chain for tamper-proof, auditable verification.",
  },
  {
    icon: "lightbulb" as const,
    title: "Smart Insights",
    description: "Receive actionable recommendations and budgeting tips the moment they matter.",
  },
];

export const steps = [
  {
    title: "Import Transactions",
    description: "Connect a bank account or upload a CSV. Read-only, encrypted end to end.",
  },
  {
    title: "AI Categorizes Spending",
    description: "Every transaction is classified, deduplicated, and checked against your budget.",
  },
  {
    title: "Receive Personalized Investment Suggestions",
    description: "Get monthly amounts, expected returns, and the reasoning behind each pick.",
  },
  {
    title: "Track Wealth Growth",
    description: "Watch net worth compound and verify each report hash on-chain.",
  },
];

export const testimonials = [
  {
    name: "Amara Osei",
    role: "Product Designer, Lagos",
    initials: "AO",
    quote:
      "I found $220 of monthly waste in the first week. FinTrust turned that straight into an index SIP without me touching a spreadsheet.",
  },
  {
    name: "Daniel Reyes",
    role: "Founder, Mendoza",
    initials: "DR",
    quote:
      "The health score is the only metric my partner and I check now. It replaced four apps and a very ugly Google Sheet.",
  },
  {
    name: "Priya Nair",
    role: "Data Engineer, Bengaluru",
    initials: "PN",
    quote:
      "On-chain report hashes sold me. My accountant can verify a statement without ever seeing my raw transactions.",
  },
];
