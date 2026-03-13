import { Scale } from "lucide-react";

export function BrandMark(props: { className?: string }) {
  return (
    <div className={props.className} aria-label="GAD Legal Consult brand mark">
      <div className="flex items-center gap-3">
        <div
          className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/75 shadow-lg shadow-secondary/20 ring-1 ring-white/10"
          data-testid="brand-mark"
        >
          <Scale className="h-5 w-5 text-secondary-foreground" />
          <span className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
        </div>
        <div className="leading-none">
          <div className="font-display text-base sm:text-lg tracking-tight" data-testid="brand-name">
            GAD Legal Consult
          </div>
          <div className="mt-1 text-xs text-muted-foreground" data-testid="brand-tagline">
            Clarity. Strategy. Results.
          </div>
        </div>
      </div>
    </div>
  );
}
