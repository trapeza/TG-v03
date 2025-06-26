interface RankIconProps {
  rank: string
  size?: number
  className?: string
}

export function RankIcon({ rank, size = 16, className = "" }: RankIconProps) {
  const getRankColor = (rank: string) => {
    switch (rank) {
      case "diamond":
        return "#E5E7EB" // Light gray/white
      case "ruby":
        return "#DC2626" // Red
      case "emerald":
        return "#059669" // Green
      case "sapphire":
        return "#2563EB" // Blue
      case "amethyst":
        return "#7C3AED" // Purple
      default:
        return "#6B7280" // Gray
    }
  }

  const color = getRankColor(rank)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Diamond outline with proper proportions */}
      <path
        d="M12 3 L16 7 L18 11 L12 21 L6 11 L8 7 Z"
        fill={color}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="0.3"
        strokeLinejoin="round"
      />

      {/* Top table facet */}
      <path d="M8 7 L16 7 L18 11 L6 11 Z" fill="rgba(255,255,255,0.4)" />

      {/* Crown facets */}
      <path d="M12 3 L16 7 L14 7 L12 5 Z" fill="rgba(255,255,255,0.6)" />
      <path d="M12 3 L8 7 L10 7 L12 5 Z" fill="rgba(255,255,255,0.5)" />

      {/* Left pavilion facet */}
      <path d="M6 11 L12 21 L9 16 Z" fill="rgba(255,255,255,0.2)" />

      {/* Right pavilion facet */}
      <path d="M18 11 L12 21 L15 16 Z" fill="rgba(0,0,0,0.2)" />

      {/* Center pavilion shadow */}
      <path d="M9 16 L12 21 L15 16 L12 13 Z" fill="rgba(0,0,0,0.15)" />
    </svg>
  )
}

// Special diamond icon for the Earn button
export function EarnDiamondIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Diamond outline with proper proportions */}
      <path
        d="M12 3 L16 7 L18 11 L12 21 L6 11 L8 7 Z"
        fill="#E0115F"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="0.3"
        strokeLinejoin="round"
      />

      {/* Top table facet */}
      <path d="M8 7 L16 7 L18 11 L6 11 Z" fill="rgba(255,255,255,0.5)" />

      {/* Crown facets */}
      <path d="M12 3 L16 7 L14 7 L12 5 Z" fill="rgba(255,255,255,0.7)" />
      <path d="M12 3 L8 7 L10 7 L12 5 Z" fill="rgba(255,255,255,0.6)" />

      {/* Left pavilion facet */}
      <path d="M6 11 L12 21 L9 16 Z" fill="rgba(255,255,255,0.3)" />

      {/* Right pavilion facet */}
      <path d="M18 11 L12 21 L15 16 Z" fill="rgba(0,0,0,0.3)" />

      {/* Center pavilion shadow */}
      <path d="M9 16 L12 21 L15 16 L12 13 Z" fill="rgba(0,0,0,0.2)" />
    </svg>
  )
}
