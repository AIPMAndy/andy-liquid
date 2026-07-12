# Andy Liquid

Premium liquid and glass effects for modern web applications.

## 🌊 Features

- **Liquid Canvas** - Three.js powered 3D liquid distortion effects
- **Glass Panels** - CSS glassmorphism with accessibility support
- **Fluid Buttons** - Magnetic hover effects with spring physics
- **Morph Transitions** - Smooth shape-shifting animations
- **Liquid Navigation** - Floating island and dock-style navigation

## 🚀 Quick Start

```bash
# Install
npm install @andy-liquid/react
# or
pnpm add @andy-liquid/react
# or
bun add @andy-liquid/react
```

```tsx
import { LiquidCanvas, GlassPanel } from '@andy-liquid/react'

export default function App() {
  return (
    <div>
      <LiquidCanvas 
        text={["Hello", "World"]}
        intensity={7}
      />
      <GlassPanel variant="medium">
        <h1>Beautiful Glass Effect</h1>
      </GlassPanel>
    </div>
  )
}
```

## 📦 Packages

- `@andy-liquid/core` - Core effects engine
- `@andy-liquid/react` - React components
- `@andy-liquid/vue` - Vue components (coming soon)
- `@andy-liquid/svelte` - Svelte components (coming soon)

## 🎨 Design Philosophy

Andy Liquid integrates best practices from:
- Three.js 3D liquid simulations
- Apple's Liquid Glass design language
- High-end agency visual design principles
- Performance-first fluid animations

## 📖 Documentation

Visit [andy-liquid.dev](https://andy-liquid.dev) for full documentation.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

MIT © Andy

## 🙏 Credits

Built upon:
- [threejs-components](https://github.com/klevron/threejs-components) by Kevin Levron
- [liquid-effect-animation](https://github.com/StarKnightt/liquid-effect-animation) by StarKnightt
- [taste-skill](https://github.com/Leonxlnx/taste-skill) by Leonxlnx
