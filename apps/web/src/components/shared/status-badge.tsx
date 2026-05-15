import type { BillStatus } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<BillStatus, string> = {
  Draft: "bg-muted text-muted-foreground",
  Review: "bg-primary/10 text-primary",
  Debate: "bg-[var(--institutional-gold)]/15 text-[#8a6f12]",
  Voting: "bg-destructive/10 text-destructive",
  Passed: "bg-emerald-50 text-emerald-800",
  Rejected: "bg-destructive/15 text-destructive",
};

export function StatusBadge({
  status,
  className,
}: {
  status: BillStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
