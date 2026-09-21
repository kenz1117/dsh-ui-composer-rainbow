/**
 * 「彩虹边框」client 词典：zh/en 键并集必须完全一致（类型化注册的编译约束）。
 * @module @kenz1117/dsh-ui-rainbowspeak/client/locales
 */

/** 词典命名空间（同时用作 LocaleNamespaceMap 的声明合并键）。 */
export const NS = 'ui-rainbowspeak'

/** 「彩虹边框」设置页全部文案键。 */
export type RainbowKey =
  | 'nav'
  | 'enable'
  | 'enableDesc'
  | 'period'
  | 'width'
  | 'unitPerLoop'
  | 'unitPx'
  | 'palette'
  | 'paletteRainbow'
  | 'paletteAurora'
  | 'paletteSunset'
  | 'palettePeach'
  | 'paletteOcean'
  | 'paletteCyberpunk'
  | 'paletteTheme'
  | 'side'
  | 'sideAll'
  | 'sideTop'
  | 'sideBottom'
  | 'reverse'
  | 'breathe'
  | 'stateNote'
  | 'reset'

/** 中文文案（宿主语言为中文时的显示文本）。 */
export const zh: Record<RainbowKey, string> = {
  nav: '彩虹边框',
  enable: '启用效果',
  enableDesc: '沿聊天输入框边界流动的彩虹描边',
  period: '流动速度',
  width: '环带宽度',
  unitPerLoop: '秒/圈',
  unitPx: 'px',
  palette: '配色方案',
  paletteRainbow: '经典彩虹',
  paletteAurora: '极光青绿',
  paletteSunset: '日落橙紫',
  palettePeach: '蜜桃粉金',
  paletteOcean: '海洋蓝紫',
  paletteCyberpunk: '赛博霓虹',
  paletteTheme: '跟随主题',
  side: '显示位置',
  sideAll: '四边',
  sideTop: '仅顶边',
  sideBottom: '仅底边',
  reverse: '反向流动',
  breathe: '呼吸明暗',
  stateNote: '会话运行时自动加速，等待审批时琥珀提醒，出错时红色警示',
  reset: '恢复默认',
}

/** 英文文案（宿主语言为英文时的显示文本）。 */
export const en: Record<RainbowKey, string> = {
  nav: 'Rainbow border',
  enable: 'Enable effect',
  enableDesc: 'A rainbow ring flowing along the composer border',
  period: 'Flow speed',
  width: 'Ring width',
  unitPerLoop: 's/loop',
  unitPx: 'px',
  palette: 'Color scheme',
  paletteRainbow: 'Rainbow',
  paletteAurora: 'Aurora',
  paletteSunset: 'Sunset',
  palettePeach: 'Peach',
  paletteOcean: 'Ocean',
  paletteCyberpunk: 'Cyberpunk',
  paletteTheme: 'Follow theme',
  side: 'Placement',
  sideAll: 'All sides',
  sideTop: 'Top only',
  sideBottom: 'Bottom only',
  reverse: 'Reverse flow',
  breathe: 'Breathing',
  stateNote: 'Speeds up while running, amber while awaiting approval, red on errors',
  reset: 'Reset to defaults',
}