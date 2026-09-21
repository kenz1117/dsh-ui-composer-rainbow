/**
 * 配色方案色标：设置面板预览色块与注入样式表共用的单一来源。
 * 首尾同色闭合（从蓝起顺时针），保证锥形渐变环无缝。
 * @module @kenz1117/dsh-ui-composer-rainbow/client/palettes
 */

/** 每种配色方案的 conic-gradient 色标串（直接拼进 background）。 */
export const PALETTE_STOPS: Readonly<Record<string, string>> = {
  rainbow: '#38bdf8, #818cf8, #c084fc, #f472b6, #fb7185, #fb923c, #fbbf24, #a3e635, #34d399, #22d3ee, #38bdf8',
  aurora: '#22d3ee, #34d399, #4ade80, #a7f3d0, #2dd4bf, #38bdf8, #818cf8, #22d3ee',
  sunset: '#fbbf24, #fb923c, #f87171, #e879f9, #a855f7, #6366f1, #f97316, #fbbf24',
  peach: '#fecaca, #fda4af, #f472b6, #fbcfe8, #fcd34d, #fdba74, #f9a8d4, #fecaca',
  ocean: '#0ea5e9, #38bdf8, #818cf8, #6366f1, #22d3ee, #0ea5e9',
  // cyberpunk：霓虹青-电紫-品红对撞（夜城灯管主色），86% 附近夹一小段
  // 灯管白芯——旋转时白光掠过如霓虹灯管通电，比等距色相环更有赛博感。
  cyberpunk: '#00f0ff, #7b2ff7 28%, #ff2a6d 48%, #c800a8 62%, #00f0ff 78%, #d8feff 86%, #00f0ff 100%',
  // theme：跟随宿主主题的品牌蓝（浅色 deepseek-500、暗色自动 deepseek-400），
  // 运行时经 color-mix 派生明暗变体（闭环无缝）。
  theme: 'var(--dsw-alias-button-info-fill), color-mix(in srgb, var(--dsw-alias-button-info-fill) 65%, white), color-mix(in srgb, var(--dsw-alias-button-info-fill) 72%, #0ea5e9), color-mix(in srgb, var(--dsw-alias-button-info-fill) 70%, black), var(--dsw-alias-button-info-fill)',
}
