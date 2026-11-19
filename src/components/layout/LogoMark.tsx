/**
 * LOGO MARK — a winding route with three milestone nodes (the Kaavosh idea:
 * a path you walk node by node). Consumed by: Header, Footer, landing.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-g" x1="4" y1="28" x2="28" y2="4">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#e879f9" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="8"
        stroke="url(#logo-g)"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <path
        d="M7 25c5-1 4-9 9-9s4-8 9-9"
        stroke="url(#logo-g)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="7" cy="25" r="2.2" fill="#818cf8" />
      <circle cx="16" cy="16" r="2.2" fill="#22d3ee" />
      <circle cx="25" cy="7" r="2.2" fill="#e879f9" />
    </svg>
  );
}
