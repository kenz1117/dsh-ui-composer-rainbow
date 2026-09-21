<div align="center">

# dsh-ui-rainbowspeak

<p align="center"><b>虹语</b> RainbowSpeak — 一圈会流动的彩虹边框，输入框也有表情：运行时加速、待审琥珀、出错泛红。</p>

<p align="center">
  <a href="https://github.com/kenz1117/dsh-ui-rainbowspeak/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/kenz1117/dsh-ui-rainbowspeak?logo=github"></a>
  <a href="https://www.npmjs.com/package/@kenz1117/dsh-ui-rainbowspeak"><img alt="npm version" src="https://img.shields.io/npm/v/@kenz1117/dsh-ui-rainbowspeak?logo=npm"></a>
  <a href="https://www.npmjs.com/package/@kenz1117/dsh-ui-rainbowspeak"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@kenz1117/dsh-ui-rainbowspeak?logo=npm"></a>
  <a href="https://github.com/kenz1117/dsh-ui-rainbowspeak/blob/main/LICENSE"><img alt="License MIT" src="https://img.shields.io/github/license/kenz1117/dsh-ui-rainbowspeak"></a>
  <a href="https://github.com/kenz1117/dsh-ui-rainbowspeak/pulls"><img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen"></a>
  <a href="https://github.com/kenz1117/dsh-ui-rainbowspeak"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/kenz1117/dsh-ui-rainbowspeak?logo=github"></a>
  <a href="https://github.com/kenz1117/dsh-ui-rainbowspeak/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/kenz1117/dsh-ui-rainbowspeak"></a>
  <a href="https://awesome-dsh-plugin.com"><img alt="Awesome DSH Plugin" src="https://awesome-dsh-plugin.com/badge.svg"></a>
</p>

[中文](README.md) · [English](README.en.md)

</div>

---

<div align="center">
  <img src="assets/01-rainbowspeak-default.png" alt="dsh-ui-rainbowspeak — 输入框经典彩虹边框" width="80%">
</div>

## ✨ 为什么选它

### 纯装饰，零侵入

不接管任何插槽、不打宿主补丁、不注册工具、不注入系统提示。纯浏览器端装饰：一条 `conic-gradient` 圆环经蒙版只留卡片边缘，靠注册的自定义属性旋转流动。客户端 bundle 仅 17 KB，引擎不支持 `@property` 时自动降级为静态渐变环。

### 边框就是会话状态

彩虹环实时反映会话：agent 运行中加速（4 s → 1.2 s/圈）；工具审批或向用户提问待处理时转琥珀色慢脉冲；发送失败或 agent 出错转红色快脉冲；一轮完成播放一周期的庆祝闪光。不用盯屏幕，余光就知道它干活到哪一步。

### 七种配色，还能跟着主题走

经典彩虹 / 极光 / 日落 / 蜜桃 / 海洋 / 赛博霓虹之外，还有**跟随主题**——经 `color-mix` 从宿主品牌色派生，深浅主题切换即时跟随，永不出戏。

## 🌈 功能

- **彩虹跑马灯边框**：输入框卡片（`[data-composer-card]` 宿主锚点）四周流动彩带，经注册的 `@property` 角度驱动渐变真实动起来；不支持 `@property` 的引擎降级为静态渐变环。
- **设置面板**（`Settings` → `Rainbow border`）：启用/禁用、流速（1–10 秒/圈）、环宽（1–6 px）、配色、位置（四边/顶部/底部）、反向流动、呼吸亮度叠加。全部偏好持久化在 `localStorage`，即时生效。

  ![设置面板：七种配色、流速、环宽与位置](assets/02-settings-rainbow.png)
- **七种配色**：经典彩虹、极光、日落、蜜桃、海洋、赛博霓虹（青/紫/品红，带白色灯闪段），以及**跟随主题**——经 `color-mix` 从宿主品牌令牌派生。
- **会话状态感知**：经宿主 dock 座位读取会话状态——agent 运行中环加速（4 s → 1.2 s/圈）；工具审批或 ask-user 待处理时琥珀色慢脉冲；发送失败或 agent 出错红色快脉冲；一轮完成时播放一周期的庆祝闪光。优先级：错误 > 提醒 > 运行。
- **聚焦增亮**：输入框聚焦时环增亮增饱和，失焦缓退。
- **无障碍**：遵循 `prefers-reduced-motion`（动画禁用、保留静态环）；设置控件带本地化标签与 aria 属性。
- **中英双语**：文案经宿主 locale 注册表下发，跟随宿主语言设置。

## 🎨 配色一览

| 赛博霓虹 | 极光 | 日落 |
| --- | --- | --- |
| ![赛博霓虹：深色主题下的青紫品红高冲击配色](assets/03-cyberpunk-dark.png) | ![极光：深色主题下的青绿配色](assets/04-aurora-dark.png) | ![日落：深色主题下的橙紫配色](assets/05-sunset-dark.png) |

**跟随主题**（浅色模式）：边框取自宿主品牌色，主题切换即时跟随。

![跟随主题：浅色模式下与宿主品牌色联动](assets/06-theme-follow-light.png)

## 📦 安装

从 dsh CLI 安装：

```sh
dsh plugin add @kenz1117/dsh-ui-rainbowspeak
```

或手动加入 profile 的 `package.json`：

```json
{
  "dependencies": {
    "@kenz1117/dsh-ui-rainbowspeak": "*"
  }
}
```

本地开发可将依赖指向一个 checkout：

```json
{
  "dependencies": {
    "@kenz1117/dsh-ui-rainbowspeak": "link:/absolute/path/to/dsh-ui-rainbowspeak"
  }
}
```

然后在 profile 目录执行 `pnpm install` 并重启宿主。使用 `link:` 形式时，插件仓库里跑一次 `pnpm bundle`，宿主下次重启即取到改动——无需重装。

## ⚙️ 工作原理

- 插件在 apply 时挂载单张 `<style data-plugin>` 样式表，dispose 时移除（effect 生命周期）。
- 输入框卡片的 `::before` 绘制覆盖整个色轮的 `conic-gradient`；`mask` 合成把内部裁掉，只留边缘环带，圆角对齐卡片半径。环宽与流速从 `--dsh-rainbow-*` 变量读取。
- `--dsh-rainbow-angle` 经 `@property` 注册为 `<angle>`，渐变起始角因此可插值；关键帧让它旋转 360°。
- 用户偏好与会话状态投影到 `<html>` 的 `data-rainbow-*` 属性与内联 CSS 变量，每个开关即时生效、无需重建样式表。
- 状态桥读取宿主会话座位与全局待交互座位（审批/ask-user）——只在插件层，不涉及 agent-loop。

## 🛠 开发

```sh
pnpm install        # 依赖（peer 经 scripts/link-peers.mjs 链入 monorepo checkout）
pnpm test           # vitest 套件（node 半边、偏好钳制、状态投影、bundle 冒烟）
pnpm typecheck      # tsc --noEmit
pnpm bundle         # tsdown: lib/index.js（node 半边）+ lib/client.js（浏览器 IIFE）
```

`client` 半边是注入宿主 web 客户端的自包含 IIFE；`node` 半边是保持清单对称的空载体。

## 🤝 兼容性

- 客户端平台：`web`（desktop/web 宿主渲染）。流动动画需要 `@property` 支持（所有 Chromium/Electron 构建均可用）；其他引擎显示静态环。
- Peer：`@deepseek-ai/cordis`（由宿主在运行时提供）。

## 📄 许可证

[MIT](https://github.com/kenz1117/dsh-ui-rainbowspeak) © 2026 KenZ (kenz1117)
