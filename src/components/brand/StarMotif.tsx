/**
 * Four-point star decorative element extracted from the Stellar logo.
 * Used as a repeating design motif throughout the site.
 */

interface StarMotifProps {
  size?: number
  className?: string
  color?: string
}

export default function StarMotif({ size = 24, className = '', color = 'currentColor' }: StarMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill={color}
      />
    </svg>
  )
}

export function StarCluster({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <StarMotif size={20} className="text-emerald" />
      <StarMotif size={10} className="text-emerald/60 absolute -top-2 -right-3" />
    </div>
  )
}
