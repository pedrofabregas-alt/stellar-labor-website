/**
 * Stellar Labor Logo
 * Recreated from the brand logo: lowercase "stellar" with a four-point star
 * above the "r", plus "LABOR PROFESSIONAL SERVICES" subtitle.
 *
 * Usage: <Logo variant="dark" /> for light backgrounds
 *        <Logo variant="light" /> for dark backgrounds
 */

interface LogoProps {
  variant?: 'dark' | 'light'
  showSubtitle?: boolean
  className?: string
}

export default function Logo({ variant = 'dark', showSubtitle = false, className = '' }: LogoProps) {
  const fill = variant === 'dark' ? '#0C0C0E' : '#FAFAF8'

  return (
    <svg
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stellar Labor Professional Services"
    >
      {/* "stellar" wordmark */}
      <text
        x="0"
        y="38"
        fontFamily="'DM Serif Display', Georgia, serif"
        fontSize="44"
        fontWeight="400"
        fill={fill}
        letterSpacing="-1"
      >
        stellar
      </text>

      {/* Four-point star above the "r" */}
      <g transform="translate(195, 4)">
        <path
          d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
          fill={fill}
        />
      </g>
      <g transform="translate(204, 0)">
        <path
          d="M3.5 0L4.25 2.75L7 3.5L4.25 4.25L3.5 7L2.75 4.25L0 3.5L2.75 2.75L3.5 0Z"
          fill={fill}
        />
      </g>

      {/* Subtitle */}
      {showSubtitle && (
        <text
          x="1"
          y="55"
          fontFamily="'Inter', system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="500"
          fill={fill}
          letterSpacing="3.5"
          opacity="0.7"
        >
          LABOR PROFESSIONAL SERVICES
        </text>
      )}
    </svg>
  )
}
