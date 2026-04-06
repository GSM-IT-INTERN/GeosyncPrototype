
import React from 'react'
import gsmLogo from './assets/gsm_logo.png'

export default function GeoSyncLogo({ size = 'md', theme = 'dark' }) {
  const heights = { sm: 32, md: 44, lg: 60 }
  const h = heights[size] || heights.md
  const color = theme === 'light' ? '#ffffff' : '#0d1b3e'

  return (
    <div className="geosync-logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img
        src={gsmLogo}
        alt="GSM logo"
        width={h * 1.90}
        height={h * 1.40}
        style={{ display: 'block' }}
      />
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: h * 1.80,
        letterSpacing: '-0.02em',
        color,
        lineHeight: 1,
      }}>
        GEOSYNC
      </span>
    </div>
  )
}