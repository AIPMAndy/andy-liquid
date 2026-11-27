# Andy Liquid

<div align="center">

![Andy Liquid](https://img.shields.io/badge/Andy-Liquid-00D9FF?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge)

**为现代 Web 应用打造的顶级液态与玻璃效果库**

[English](#english) | [示例](#-快速开始) | [文档](#-组件) | [贡献](#-贡献)

</div>

<!-- andy-geo:start -->
## 一句话简介

**整合顶级液态效果，打造高级感视觉体验**

- 作者：AI酋长Andy（Andy Liu，英文名 AI Chief Andy），流量 AI 联合创始人、星觉 AI 创始人。星觉科技，北京。
- 阅读或使用：[GitHub 仓库](https://github.com/AIPMAndy/andy-liquid)
- 联系：微信 `AIPMAndy`（备注「andy-liquid」）· [官网 metaver.vip](https://metaver.vip/) · [X @AIPMAndy](https://x.com/AIPMAndy)
- 许可：MIT。内容免费使用；企业合作或个人陪跑请先沟通，公开页不公示价格。
- 机器可读摘要：[llms.txt](llms.txt)（供 AI 引擎与检索工具读取）

## 常见问题

**这是什么？**Andy Liquid：整合顶级液态效果，打造高级感视觉体验

**包含什么？**主要模块：核心特性、快速开始、包结构、组件、设计理念、技术栈。

**要花钱吗？**按 MIT 许可免费使用；付费只涉及作者的企业合作与一对一咨询，不影响仓库内容。

**怎么开始？**克隆仓库后按下方 README 的快速开始部分操作；无需付费账号即可阅读全部内容。

<!-- andy-geo:end -->

---

## ✨ 核心特性

🌊 **液态画布** - 基于 Three.js 的 3D 液态扭曲效果，带来流动的视觉冲击  
🪟 **玻璃面板** - 完美还原 Apple 风格的玻璃态效果，支持无障碍访问  
🎯 **流体按钮** - 磁吸式悬停效果，物理级弹簧动画  

## 🚀 快速开始

### 安装

> 目前还没有发布到 npm，需要从源码构建（Node ≥ 18，pnpm ≥ 9）：

```bash
git clone https://github.com/AIPMAndy/andy-liquid.git
cd andy-liquid
pnpm install
pnpm build

# 打包成本地 tgz，再装进你的项目
cd packages/core && pnpm pack --pack-destination ../../dist-pkg && cd ../..
cd packages/react && pnpm pack --pack-destination ../../dist-pkg && cd ../..
npm install /path/to/andy-liquid/dist-pkg/andy-liquid-core-0.1.0.tgz /path/to/andy-liquid/dist-pkg/andy-liquid-react-0.1.0.tgz
```

### 基础使用

```tsx
import { LiquidCanvas, GlassPanel, FluidButton } from '@andy-liquid/react'

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* 液态背景 */}
      <LiquidCanvas 
        text={["Hello", "World"]}
        intensity={7}
        metalness={0.35}
        roughness={0.45}
        enableRain={true}
      />
      
      {/* 玻璃面板 */}
      <GlassPanel 
        variant="medium"
        className="max-w-2xl mx-auto mt-20 p-8"
      >
        <h1 className="text-4xl font-bold mb-4">
          欢迎来到液态世界
        </h1>
        <p className="text-gray-600">
          体验顶级视觉效果带来的极致交互
        </p>
        
        {/* 流体按钮 */}
        <FluidButton
          variant="primary"
          magnetic={true}
          onClick={() => console.log('Clicked!')}
        >
          开始探索
        </FluidButton>
      </GlassPanel>
    </div>
  )
}
```

## 📦 包结构

| 包名 | 描述 | 状态 |
|------|------|------|
| `@andy-liquid/core` | 核心效果引擎 | ✅ 可用 |
| `@andy-liquid/react` | React 组件封装 | ✅ 可用 |
| `@andy-liquid/vue` | Vue 组件 | 🚧 开发中 |
| `@andy-liquid/svelte` | Svelte 组件 | 📋 计划中 |

## 🎨 组件

### LiquidCanvas - 液态画布

3D 液态扭曲背景效果，基于 Three.js 实现。

```tsx
<LiquidCanvas 
  text={["你的", "文字"]}
  intensity={7}           // 扭曲强度 1-10
  metalness={0.35}        // 金属度 0-1
  roughness={0.45}        // 粗糙度 0-1
  displacementScale={2}   // 位移缩放
  enableRain={true}       // 雨滴效果
  className="custom-class"
/>
```

**特点：**
- 🎭 动态文字纹理生成
- 🌈 可自定义材质属性
- ⚡ 高性能 WebGL 渲染
- 📱 响应式适配
- 🎨 支持自定义样式

### GlassPanel - 玻璃面板

Apple 风格的玻璃态效果，带模糊背景和半透明。

```tsx
<GlassPanel 
  variant="light"      // light | medium | dark
  blur="default"       // subtle | default | strong
  className="p-6"
>
  你的内容
</GlassPanel>
```

**变体：**
- `light` - 轻度模糊，高透明度
- `medium` - 中度模糊，适中透明度
- `dark` - 深度模糊，低透明度

### FluidButton - 流体按钮

带磁吸和弹簧动画的交互式按钮。

```tsx
<FluidButton
  variant="primary"    // primary | secondary | ghost
  magnetic={true}      // 磁吸效果
  springConfig={{      // 弹簧配置
    tension: 300,
    friction: 20
  }}
  onClick={handleClick}
>
  点击我
</FluidButton>
```

**特性：**
- 🧲 磁吸式鼠标跟随
- 🌊 流体动画过渡
- ⚙️ 可配置弹簧物理
- 🎯 完整的键盘支持

## 🎯 设计理念

Andy Liquid 融合了顶级设计实践：

- 🍎 **Apple 液态玻璃** - 借鉴 iOS/macOS 的玻璃态设计语言
- 🎬 **高端视觉** - 对标国际一线代理商的视觉标准
- ⚡ **性能优先** - 60fps 流畅动画，优化的资源加载
- ♿ **无障碍访问** - 符合 WCAG 标准，完整的键盘和屏幕阅读器支持
- 🎨 **高度可定制** - 灵活的配置选项，适应各种设计需求

## 🛠️ 技术栈

- **TypeScript** - 类型安全的开发体验
- **React 19** - 最新的 React 特性
- **Three.js** - 强大的 3D 图形库
- **Framer Motion** - 流畅的动画库
- **Tailwind CSS** - 实用优先的样式方案
- **Turbo** - 高性能 Monorepo 构建

## 🎪 本地演示

仓库提供 [Next.js 交互示例](./apps/example/)。使用 Node.js 20.9+ 与仓库指定的 pnpm 9.0.0，在仓库根目录运行：

```sh
pnpm install
pnpm build
pnpm --filter example dev
```

打开 [http://localhost:3000](http://localhost:3000) 体验。

## 📖 文档

- [组件用法](#-组件)
- [示例代码](./examples/)
- [设计资料](./design/)
- [组件包源码](./packages/)

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细指南。

## 📄 开源协议

MIT © Andy - 自由使用，保留署名

## 🙏 致谢

本项目基于以下优秀的开源项目：

- [threejs-components](https://github.com/klevron/threejs-components) by Kevin Levron - Three.js 组件库
- [liquid-effect-animation](https://github.com/StarKnightt/liquid-effect-animation) by StarKnightt - 液态效果灵感
- [taste-skill](https://github.com/Leonxlnx/taste-skill) by Leonxlnx - 设计参考

## 🌟 Star History

如果这个项目对你有帮助，请给个 Star ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=AIPMAndy/andy-liquid&type=Date)](https://star-history.com/#AIPMAndy/andy-liquid&Date)

---

<div id="english"></div>

# English

**Premium liquid and glass effects library for modern web applications**

## ✨ Features

🌊 **Liquid Canvas** - Three.js powered 3D liquid distortion effects  
🪟 **Glass Panels** - Apple-style glassmorphism with accessibility  
🎯 **Fluid Buttons** - Magnetic hover with spring physics  

## 🚀 Quick Start

### Installation

> Not published to npm yet. Build from source (Node ≥ 18, pnpm ≥ 9):

```bash
git clone https://github.com/AIPMAndy/andy-liquid.git
cd andy-liquid
pnpm install
pnpm build

# Pack local tarballs, then install them in your project
cd packages/core && pnpm pack --pack-destination ../../dist-pkg && cd ../..
cd packages/react && pnpm pack --pack-destination ../../dist-pkg && cd ../..
npm install /path/to/andy-liquid/dist-pkg/andy-liquid-core-0.1.0.tgz /path/to/andy-liquid/dist-pkg/andy-liquid-react-0.1.0.tgz
```

### Basic Usage

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
- `@andy-liquid/svelte` - Svelte components (planned)

## 🎨 Design Philosophy

Andy Liquid integrates best practices from:

- 🍎 Apple's Liquid Glass design language
- 🎬 High-end agency visual standards
- ⚡ Performance-first fluid animations
- ♿ WCAG accessibility compliance

## 📖 Documentation

See the [local interactive demo](#-本地演示), [examples](./examples/), and [package source](./packages/).

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © Andy

## 🙏 Credits

Built upon:
- [threejs-components](https://github.com/klevron/threejs-components) by Kevin Levron
- [liquid-effect-animation](https://github.com/StarKnightt/liquid-effect-animation) by StarKnightt
- [taste-skill](https://github.com/Leonxlnx/taste-skill) by Leonxlnx

---

<!-- andy-author-card:start -->
## 作者 / About the author

**AI 酋长 Andy（Andy Liu，GitHub/X @AIPMAndy）**：前腾讯/百度 AI 产品专家，大模型独角兽前 VP，现专注 AI + 产品方法论创业。

微信 `AIPMAndy`（备注「andy-liquid」） · [X @AIPMAndy](https://x.com/AIPMAndy) · [Telegram @AIPMAndy](https://t.me/AIPMAndy) · [个人官网 metaver.vip](https://metaver.vip/)

*AI Chief Andy (Andy Liu, @AIPMAndy on GitHub and X) is a former Tencent and Baidu AI product expert and former VP at an LLM unicorn, now a serial entrepreneur focused on AI and product methodology.*

### 作者的其他项目

- [AndySoul](https://github.com/AIPMAndy/AndySoul)：CLAUDE.md / AGENTS.md 规则模板，让 Claude Code、Codex、Cursor 少犯错
- [DNA Memory](https://github.com/AIPMAndy/dna-memory)：Claude Code、Codex 共用的本地 AI Agent 记忆 MCP
- [SafeSkill](https://github.com/AIPMAndy/safeskill)：装 AI Skill 之前，先扫危险命令、提示注入和密钥泄露
- [OpenClaw Skills 中文精选](https://github.com/AIPMAndy/awesome-openclaw-skills-CN)：OpenClaw Skills 分类整理，附国产模型接入指南
- [Grok Bot 中文攻略](https://aipmandy.github.io/grok-bot-handbook/)：AI Agent 中文教程

<!-- andy-author-card:end -->
