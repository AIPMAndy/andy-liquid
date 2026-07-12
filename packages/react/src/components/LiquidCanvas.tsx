"use client"

import { useEffect, useRef, useCallback } from 'react'
import type { LiquidCanvasConfig } from '@andy-liquid/core'
import { initLiquidEffect } from '@andy-liquid/core'

export interface LiquidCanvasProps extends LiquidCanvasConfig {
  className?: string
  style?: React.CSSProperties
}

/**
 * LiquidCanvas Component
 * Three.js powered 3D liquid distortion effect
 * Based on liquid-effect-animation by StarKnightt
 */
export function LiquidCanvas({
  text,
  subText,
  tagline,
  backgroundColor = '#fafafa',
  textColor = '#1d1d1f',
  intensity = 7,
  metalness = 0.35,
  roughness = 0.45,
  displacementScale = 2,
  enableRain = false,
  className = '',
  style = {},
}: LiquidCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasId = useRef(`liquid-canvas-${Math.random().toString(36).slice(2, 11)}`)

  const config: LiquidCanvasConfig = {
    text,
    subText,
    tagline,
    backgroundColor,
    textColor,
    intensity,
    metalness,
    roughness,
    displacementScale,
    enableRain,
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const app = initLiquidEffect(canvasRef.current, config)

    return () => {
      if (app && app.dispose) {
        app.dispose()
      }
    }
  }, [text, subText, tagline, backgroundColor, textColor, intensity, metalness, roughness, displacementScale, enableRain])

  return (
    <div
      className={`liquid-canvas-container ${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        touchAction: 'none',
        overflow: 'hidden',
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        id={canvasId.current}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
