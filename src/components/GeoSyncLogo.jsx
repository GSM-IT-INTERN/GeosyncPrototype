
import React from 'react'
import gmsLogo from './assets/gms_logo.png'
import './GeoSyncLogo.css'

export default function GeoSyncLogo({ size = 'md', theme = 'dark' }) {
  return (
    <div className={`geosync-logo ${size} ${theme}`}>
      <img
        src={gmsLogo}
        alt="GMS logo"
      />
      <span>
        GEOSYNC
      </span>
    </div>
  )
}