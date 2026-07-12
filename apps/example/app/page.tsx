'use client'

import dynamic from 'next/dynamic'
import { GlassPanel, FluidButton } from '@andy-liquid/react'
import '@andy-liquid/core/style.css'

const LiquidCanvas = dynamic(
  () => import('@andy-liquid/react').then(mod => ({ default: mod.LiquidCanvas })),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Liquid Background */}
      <div className="absolute inset-0 z-0">
        <LiquidCanvas
          text={["Liquid", "Effect"]}
          subText="Interactive UI Component"
          tagline="Built with Three.js • React • Tailwind CSS"
          backgroundColor="#fafafa"
          textColor="#1d1d1f"
          intensity={7}
          metalness={0.35}
          roughness={0.45}
          displacementScale={2}
          enableRain={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Andy Liquid
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            整合顶级液态效果，打造高级感视觉体验
          </p>
        </div>

        {/* Glass Panels Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <GlassPanel variant="subtle" shape="rect" className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Subtle Glass</h3>
            <p className="text-gray-700">
              轻度模糊效果，适合背景内容清晰可见的场景
            </p>
          </GlassPanel>

          <GlassPanel variant="medium" shape="rect" glow className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Medium Glass</h3>
            <p className="text-gray-700">
              中等模糊效果，平衡可读性和视觉效果
            </p>
          </GlassPanel>

          <GlassPanel variant="strong" shape="rect" border className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strong Glass</h3>
            <p className="text-gray-700">
              强烈模糊效果，突出前景内容
            </p>
          </GlassPanel>
        </div>

        {/* Buttons Showcase */}
        <GlassPanel variant="medium" shape="rect" className="p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Interactive Buttons
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <FluidButton variant="primary" magnetic ripple>
              Primary Button
            </FluidButton>
            <FluidButton variant="secondary" magnetic ripple>
              Secondary Button
            </FluidButton>
            <FluidButton variant="ghost" magnetic ripple>
              Ghost Button
            </FluidButton>
            <FluidButton
              variant="primary"
              magnetic
              ripple
              icon={<span>🚀</span>}
            >
              With Icon
            </FluidButton>
          </div>
        </GlassPanel>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassPanel variant="medium" shape="pill" glow className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🎨 Three.js 3D Effects
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• GPU 加速的液态变形效果</li>
              <li>• 实时光照和材质渲染</li>
              <li>• 自适应性能分级</li>
              <li>• CDN 按需加载</li>
            </ul>
          </GlassPanel>

          <GlassPanel variant="medium" shape="pill" glow className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              💎 Glassmorphism
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• CSS backdrop-filter 实现</li>
              <li>• 多种模糊强度预设</li>
              <li>• 暗色模式自适应</li>
              <li>• 无障碍访问支持</li>
            </ul>
          </GlassPanel>

          <GlassPanel variant="medium" shape="pill" glow className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🧲 Magnetic Effects
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• 弹簧物理引擎</li>
              <li>• 平滑 60fps 动画</li>
              <li>• 可配置吸引范围</li>
              <li>• 多种预设参数</li>
            </ul>
          </GlassPanel>

          <GlassPanel variant="medium" shape="pill" glow className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              💧 Ripple Effects
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• 点击触发涟漪动画</li>
              <li>• 自动清理机制</li>
              <li>• 可自定义颜色和尺寸</li>
              <li>• 性能优化处理</li>
            </ul>
          </GlassPanel>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <GlassPanel variant="subtle" shape="pill" className="inline-block px-8 py-4">
            <p className="text-gray-700">
              博采众长 · 整合创新 · 开箱即用
            </p>
          </GlassPanel>
        </div>
      </div>
    </div>
  )
}
