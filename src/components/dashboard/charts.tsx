import { useState } from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { expenseCategories, monthlyTrend } from "@/lib/finance-data";
import { cn } from "@/lib/utils";

const tooltipStyle = {
  borderRadius: "12px",
  border: "1px solid var(--color-border)",
  background: "var(--color-popover)",
  color: "var(--color-popover-foreground)",
  fontSize: "12px",
  boxShadow: "var(--shadow-soft)",
} as const;

export function ExpenseAnalytics() {
  const total = expenseCategories.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <header>
        <h2 className="text-lg font-semibold">Expense Analytics</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Category split for September · ${total.toLocaleString()} total
        </p>
      </header>

      <div className="mt-6 space-y-6">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseCategories}
                dataKey="value"
                nameKey="name"
                innerRadius="55%"
                outerRadius="88%"
                paddingAngle={2}
                stroke="var(--color-card)"
                strokeWidth={3}
              >
                {expenseCategories.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Spent"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {expenseCategories.map((item) => (
            <li key={item.name} className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="min-w-0 flex-1 truncate text-sm">{item.name}</span>
              <span className="shrink-0 text-sm font-semibold">${item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const series = [
  { key: "income", label: "Income", color: "var(--color-chart-1)" },
  { key: "expenses", label: "Expenses", color: "var(--color-chart-5)" },
  { key: "savings", label: "Savings", color: "var(--color-chart-2)" },
] as const;

export function MonthlyTrend() {
  const [hidden, setHidden] = useState<string[]>([]);

  const toggle = (key: string) =>
    setHidden((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold">Monthly Trend</h2>
          <p className="mt-1 text-sm text-muted-foreground">Income, expenses and savings</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          {series.map((item) => (
            <button
              key={item.key}
              onClick={() => toggle(item.key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                hidden.includes(item.key)
                  ? "border-border text-muted-foreground"
                  : "border-primary/30 bg-primary-soft text-primary",
              )}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color, opacity: hidden.includes(item.key) ? 0.35 : 1 }}
              />
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-8 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyTrend} margin={{ left: -16, right: 8, top: 8 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="var(--color-muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--color-muted-foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => `$${v / 1000}k`}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name]}
            />
            <Legend wrapperStyle={{ display: "none" }} />
            {series
              .filter((item) => !hidden.includes(item.key))
              .map((item) => (
                <Line
                  key={item.key}
                  type="monotone"
                  dataKey={item.key}
                  name={item.label}
                  stroke={item.color}
                  strokeWidth={2.5}
                  dot={{ r: 3, strokeWidth: 0, fill: item.color }}
                  activeDot={{ r: 5 }}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
