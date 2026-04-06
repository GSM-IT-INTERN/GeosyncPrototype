import React from 'react'

export default function GeoSyncLogo({ size = 'md', theme = 'dark' }) {
  const heights = { sm: 32, md: 44, lg: 60 }
  const h = heights[size] || heights.md
  const color = theme === 'light' ? '#ffffff' : '#0d1b3e'

  return (
    <div className="geosync-logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {/* Icon: stacked diagonal bars */}
      <svg width={h * 0.65} height={h * 0.65} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <rect
            key={i}
            x={i * 3.6 + 1}
            y={36 - (i + 1) * 3.6 - 1}
            width={2.4}
            height={(i + 1) * 3.6}
            rx={1}
            fill={color}
            opacity={0.3 + i * 0.08}
          />
        ))}
      </svg>

      {/* Wordmark */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: h * 0.65,
        letterSpacing: '-0.02em',
        color,
        lineHeight: 1,
      }}>
        GEOSYNC
      </span>
    </div>
  )
}
