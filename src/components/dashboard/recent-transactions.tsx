import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { categoryColor, transactions } from "@/lib/finance-data";
import { cn } from "@/lib/utils";

const statusTone: Record<string, string> = {
  Completed: "bg-success/15 text-success border-success/25",
  Pending: "bg-warning/15 text-warning border-warning/25",
  Failed: "bg-destructive/12 text-destructive border-destructive/25",
};

export function RecentTransactions() {
  return (
    <section
      id="transactions"
      className="min-w-0 scroll-mt-28 rounded-2xl border border-border bg-card shadow-soft"
    >
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border p-6 sm:flex sm:justify-between sm:p-8">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <p className="mt-1 text-sm text-muted-foreground">Last 8 synced entries</p>
        </div>
        <Button variant="outline" size="sm" className="shrink-0">
          View all
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </header>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6 sm:pl-8">Merchant</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="pr-6 text-right sm:pr-8">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="transition-colors">
                <TableCell className="pl-6 font-medium whitespace-nowrap sm:pl-8">
                  {tx.merchant}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-2 text-sm whitespace-nowrap text-muted-foreground">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: categoryColor[tx.category] }}
                    />
                    {tx.category}
                  </span>
                </TableCell>
                <TableCell
                  className={cn(
                    "text-right font-semibold whitespace-nowrap",
                    tx.amount > 0 ? "text-success" : "text-foreground",
                  )}
                >
                  {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </TableCell>
                <TableCell className="whitespace-nowrap text-muted-foreground">{tx.date}</TableCell>
                <TableCell className="pr-6 text-right sm:pr-8">
                  <Badge variant="outline" className={cn("rounded-full", statusTone[tx.status])}>
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
