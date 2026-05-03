type SectionDividerProps = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Decorative divider for Clima Reformas Vendrell.
 * Mediterranean-Penedès motif: a soft horizontal wave with a small
 * stylised vine-leaf in the centre. Designed to be sober and never
 * compete with surrounding content.
 */
export default function SectionDivider({ className = "", variant = "light" }: SectionDividerProps) {
  const colorClass = variant === "dark" ? "text-accent/40" : "text-accent/30";

  return (
    <div className={`flex justify-center items-center py-6 md:py-10 ${className}`} aria-hidden="true">
      <svg
        width="180"
        height="32"
        viewBox="0 0 180 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={colorClass}
      >
        {/* Left wave */}
        <path
          d="M2 16 Q 20 6 38 16 T 74 16"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right wave */}
        <path
          d="M106 16 Q 124 6 142 16 T 178 16"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Centre vine leaf — simple two-lobed leaf with stem */}
        <g transform="translate(90 16)">
          <path
            d="M0 -8 C 5 -6, 8 -2, 6 3 C 3 6, -3 6, -6 3 C -8 -2, -5 -6, 0 -8 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="currentColor"
            fillOpacity="0.18"
            strokeLinejoin="round"
          />
          <path
            d="M0 -6 L 0 5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
