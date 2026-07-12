import type { LiquidCanvasConfig, LiquidApp } from './types'

/**
 * Generate text image for liquid effect
 * Based on liquid-effect-animation by StarKnightt
 */
export function generateTextImage(config: LiquidCanvasConfig): string | null {
  const {
    text,
    subText,
    tagline,
    backgroundColor = '#fafafa',
    textColor = '#1d1d1f'
  } = config

  const dpr = window.devicePixelRatio || 1
  const offscreen = document.createElement('canvas')
  const w = window.innerWidth
  const h = window.innerHeight
  offscreen.width = w * dpr
  offscreen.height = h * dpr
  const ctx = offscreen.getContext('2d')
  if (!ctx) return null

  ctx.scale(dpr, dpr)

  // Background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, w, h)

  const hasContent = text?.length || subText || tagline

  if (hasContent) {
    // Soft ambient light — gives liquid something to reflect
    ctx.globalCompositeOperation = 'multiply'

    const glow1 = ctx.createRadialGradient(w * 0.5, h * 0.1, 0, w * 0.5, h * 0.1, w * 0.6)
    glow1.addColorStop(0, 'rgba(220, 225, 240, 0.6)')
    glow1.addColorStop(1, 'rgba(250, 250, 250, 1)')
    ctx.fillStyle = glow1
    ctx.fillRect(0, 0, w, h)

    const glow2 = ctx.createRadialGradient(w * 0.5, h * 0.95, 0, w * 0.5, h * 0.95, w * 0.5)
    glow2.addColorStop(0, 'rgba(240, 230, 220, 0.4)')
    glow2.addColorStop(1, 'rgba(250, 250, 250, 1)')
    ctx.fillStyle = glow2
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'source-over'

    // Sub text
    if (subText) {
      ctx.fillStyle = textColor
      ctx.globalAlpha = 0.35
      const subFontSize = Math.max(11, w * 0.009)
      ctx.font = `600 ${subFontSize}px -apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif`
      ctx.textAlign = 'center'
      ctx.letterSpacing = '0.25em'
      ctx.fillText(subText.toUpperCase(), w / 2, h / 2 - w * 0.095)
    }

    // Main heading
    const fontSize = Math.min(w * 0.13, h * 0.19)
    ctx.globalAlpha = 1
    ctx.letterSpacing = '-0.04em'
    ctx.font = `700 ${fontSize}px -apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const lineHeight = fontSize * 1.08
    const totalHeight = (text?.length || 0) * lineHeight
    const startY = h / 2 - totalHeight / 2 + lineHeight / 2

    text?.forEach((line, i) => {
      ctx.fillStyle = textColor
      ctx.globalAlpha = 1
      ctx.fillText(line, w / 2, startY + i * lineHeight)
    })

    const dividerY = startY + (text?.length || 0) * lineHeight + w * 0.018

    if (text?.length && tagline) {
      ctx.globalAlpha = 0.12
      ctx.fillStyle = textColor
      ctx.fillRect(w / 2 - 30, dividerY, 60, 0.5)
    }

    if (tagline) {
      ctx.globalAlpha = 0.3
      ctx.letterSpacing = '0.02em'
      const tagFontSize = Math.max(11, w * 0.01)
      ctx.font = `400 ${tagFontSize}px -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif`
      ctx.fillText(tagline, w / 2, dividerY + w * 0.025)
    }
  }

  return offscreen.toDataURL('image/png')
}

/**
 * Initialize liquid effect with Three.js
 */
export function initLiquidEffect(
  canvas: HTMLCanvasElement,
  config: LiquidCanvasConfig
): LiquidApp | null {
  const dataUrl = generateTextImage(config)
  if (!dataUrl) return null

  // Load Three.js components via CDN
  const script = document.createElement('script')
  script.type = 'module'
  script.textContent = `
    import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.30/build/backgrounds/liquid1.min.js';

    const app = LiquidBackground(document.getElementById('${canvas.id}'));
    if (app) {
      app.loadImage('${dataUrl}');
      app.liquidPlane.material.metalness = ${config.metalness ?? 0.35};
      app.liquidPlane.material.roughness = ${config.roughness ?? 0.45};
      app.liquidPlane.uniforms.displacementScale.value = ${config.displacementScale ?? 2};
      app.setRain(${config.enableRain ?? false});
      window.__liquidApp_${canvas.id} = app;
    }
  `
  document.body.appendChild(script)

  // Return a mock app object that will be populated by the script
  return {
    dispose: () => {
      const app = (window as any)[`__liquidApp_${canvas.id}`]
      if (app && app.dispose) {
        app.dispose()
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      delete (window as any)[`__liquidApp_${canvas.id}`]
    }
  }
}
