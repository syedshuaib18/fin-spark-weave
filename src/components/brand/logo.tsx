import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  to = "/",
  compact = false,
}: {
  className?: string;
  to?: string;
  compact?: boolean;
}) {
  return (
    <Link to={to} className={cn("group flex items-center gap-2.5", className)}>
      <span className="gradient-primary grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M12 2.6 20 6.9v5.2c0 4.6-3.3 7.9-8 9.3-4.7-1.4-8-4.7-8-9.3V6.9l8-4.3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="text-primary-foreground"
          />
          <path
            d="M8.2 13.4l2.6-2.7 2 2 3-3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            className="text-primary-foreground"
          />
        </svg>
      </span>
      {!compact && (
        <span className="text-[17px] font-semibold tracking-tight">
          FinTrust<span className="text-primary"> AI</span>
        </span>
      )}
    </Link>
  );
}
