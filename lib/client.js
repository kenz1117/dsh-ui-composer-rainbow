window.__ModuleLoader__.load({id:`@kenz1117/dsh-ui-composer-rainbow`,factory:e=>{var t={exports:{}},n=t.exports;Object.defineProperty(n,Symbol.toStringTag,{value:`Module`});let r=e("react"),i=e("@deepseek-ai/dsh-client-ui-primitives"),a=e("react/jsx-runtime");function o(e){return e.promptError||e.lastAgentError?`error`:e.running?`running`:`idle`}function s(e,t){return t===`error`?`error`:e?`attention`:t}function c(e){let t=e.useSession(o),n=e.useSessionPendingInteraction(e=>e.size>0),i=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=s(n,t);e===`idle`?delete document.documentElement.dataset.rainbowState:document.documentElement.dataset.rainbowState=e},[t,n]),(0,r.useEffect)(()=>{let e=i.current;i.current=t===`running`,e===!0&&t===`idle`&&(document.documentElement.dataset.rainbowCelebrate=`1`,a.current!==null&&window.clearTimeout(a.current),a.current=window.setTimeout(()=>{delete document.documentElement.dataset.rainbowCelebrate,a.current=null},900))},[t]),(0,r.useEffect)(()=>()=>{a.current!==null&&window.clearTimeout(a.current),delete document.documentElement.dataset.rainbowState,delete document.documentElement.dataset.rainbowCelebrate},[]),null}let l=`@kenz1117/dsh-ui-composer-rainbow/settings.module.css`;if(typeof document<`u`&&document.querySelector(`style[data-plugin-css=`+JSON.stringify(l)+`]`)===null){let e=document.createElement(`style`);e.dataset.plugin=`@kenz1117/dsh-ui-composer-rainbow`,e.dataset.pluginCss=l,e.textContent=`.EeIrTa_section{gap:var(--dsw-specific-spacing-4,16px);flex-direction:column;display:flex}.EeIrTa_row{justify-content:space-between;align-items:center;gap:var(--dsw-specific-spacing-4,16px);display:flex}.EeIrTa_rowText{gap:var(--dsw-specific-spacing-1,4px);flex-direction:column;min-width:0;display:flex}.EeIrTa_label{font-size:var(--dsw-typography-font-size-body,14px);color:var(--dsw-alias-label-primary)}.EeIrTa_desc{font-size:var(--dsw-typography-font-size-caption,12px);color:var(--dsw-alias-label-secondary)}.EeIrTa_rangeRow{align-items:center;gap:var(--dsw-specific-spacing-3,12px);flex:1;max-width:260px;display:flex}.EeIrTa_range{accent-color:var(--dsw-alias-button-info-fill);flex:1;min-width:0}.EeIrTa_value{font-size:var(--dsw-typography-font-size-caption,12px);color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}.EeIrTa_chipRow{gap:var(--dsw-specific-spacing-2,8px);flex-wrap:wrap;justify-content:flex-end;display:flex}.EeIrTa_stackRow{gap:var(--dsw-specific-spacing-2,8px);flex-direction:column;display:flex}.EeIrTa_chipGrid{gap:var(--dsw-specific-spacing-2,8px);grid-template-columns:repeat(3,minmax(0,1fr));display:grid}.EeIrTa_chip{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2,transparent);color:var(--dsw-alias-label-secondary);font-size:var(--dsw-typography-font-size-caption,12px);cursor:pointer;border-radius:10px;align-items:center;gap:8px;padding:8px 10px;transition:border-color .2s,background .2s;display:inline-flex}.EeIrTa_chip:hover{border-color:var(--dsw-alias-border-l3);color:var(--dsw-alias-label-primary)}.EeIrTa_chipLabel{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.EeIrTa_swatch{border:1px solid var(--dsw-alias-border-l1);border-radius:50%;flex:none;width:16px;height:16px}.EeIrTa_chipActive{border-color:var(--dsw-alias-button-info-fill);background:color-mix(in srgb, var(--dsw-alias-button-info-fill) 12%, transparent);color:var(--dsw-alias-label-primary-bluish);cursor:default}.EeIrTa_resetRow{justify-content:flex-end;display:flex}`,document.head.appendChild(e)}var u={chip:`EeIrTa_chip`,chipActive:`EeIrTa_chipActive`,chipGrid:`EeIrTa_chipGrid`,chipLabel:`EeIrTa_chipLabel`,chipRow:`EeIrTa_chipRow`,desc:`EeIrTa_desc`,label:`EeIrTa_label`,range:`EeIrTa_range`,rangeRow:`EeIrTa_rangeRow`,resetRow:`EeIrTa_resetRow`,row:`EeIrTa_row`,rowText:`EeIrTa_rowText`,section:`EeIrTa_section`,stackRow:`EeIrTa_stackRow`,swatch:`EeIrTa_swatch`,value:`EeIrTa_value`};let d=Object.freeze({enabled:!0,periodSec:4,widthPx:2,palette:`rainbow`,reverse:!1,side:`all`,breathe:!1}),f=[`rainbow`,`aurora`,`sunset`,`peach`,`ocean`,`cyberpunk`,`theme`],p=[`all`,`top`,`bottom`],m=`dsh-ui-composer-rainbow.prefs`;function h(e){let t=e??{},n=typeof t.periodSec==`number`&&Number.isFinite(t.periodSec)?Math.min(10,Math.max(1,Math.round(t.periodSec))):d.periodSec,r=typeof t.widthPx==`number`&&Number.isFinite(t.widthPx)?Math.min(6,Math.max(1,Math.round(t.widthPx))):d.widthPx;return{enabled:typeof t.enabled==`boolean`?t.enabled:d.enabled,periodSec:n,widthPx:r,palette:f.includes(t.palette)?t.palette:d.palette,reverse:typeof t.reverse==`boolean`?t.reverse:d.reverse,side:p.includes(t.side)?t.side:d.side,breathe:typeof t.breathe==`boolean`?t.breathe:d.breathe}}function g(){let e;try{e=JSON.parse(localStorage.getItem(m)??``)}catch{return{...d}}return h(e)}function _(e){localStorage.setItem(m,JSON.stringify(e)),v(e)}function v(e){let t=document.documentElement;e.enabled?delete t.dataset.rainbowOff:t.dataset.rainbowOff=`1`,t.dataset.rainbowPalette=e.palette,t.dataset.rainbowSide=e.side,e.breathe?t.dataset.rainbowBreathe=`1`:delete t.dataset.rainbowBreathe,t.style.setProperty(`--dsh-rainbow-period`,`${e.periodSec}s`),t.style.setProperty(`--dsh-rainbow-width`,`${e.widthPx}px`),t.style.setProperty(`--dsh-rainbow-direction`,e.reverse?`reverse`:`normal`)}let y={rainbow:`#38bdf8, #818cf8, #c084fc, #f472b6, #fb7185, #fb923c, #fbbf24, #a3e635, #34d399, #22d3ee, #38bdf8`,aurora:`#22d3ee, #34d399, #4ade80, #a7f3d0, #2dd4bf, #38bdf8, #818cf8, #22d3ee`,sunset:`#fbbf24, #fb923c, #f87171, #e879f9, #a855f7, #6366f1, #f97316, #fbbf24`,peach:`#fecaca, #fda4af, #f472b6, #fbcfe8, #fcd34d, #fdba74, #f9a8d4, #fecaca`,ocean:`#0ea5e9, #38bdf8, #818cf8, #6366f1, #22d3ee, #0ea5e9`,cyberpunk:`#00f0ff, #7b2ff7 28%, #ff2a6d 48%, #c800a8 62%, #00f0ff 78%, #d8feff 86%, #00f0ff 100%`,theme:`var(--dsw-alias-button-info-fill), color-mix(in srgb, var(--dsw-alias-button-info-fill) 65%, white), color-mix(in srgb, var(--dsw-alias-button-info-fill) 72%, #0ea5e9), color-mix(in srgb, var(--dsw-alias-button-info-fill) 70%, black), var(--dsw-alias-button-info-fill)`},b=[{value:`rainbow`,key:`paletteRainbow`},{value:`aurora`,key:`paletteAurora`},{value:`sunset`,key:`paletteSunset`},{value:`peach`,key:`palettePeach`},{value:`ocean`,key:`paletteOcean`},{value:`cyberpunk`,key:`paletteCyberpunk`},{value:`theme`,key:`paletteTheme`}],x=[{value:`all`,key:`sideAll`},{value:`top`,key:`sideTop`},{value:`bottom`,key:`sideBottom`}];function S(e,t,n){let r={...e,...t};n(r),_(r)}function C({t:e}){let[t,n]=(0,r.useState)(g),o=n;return/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.section,children:[/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.row,children:[/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.rowText,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`enable`)}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.desc,children:e(`enableDesc`)})]}),/* @__PURE__ */ (0,a.jsx)(i.Switch,{checked:t.enabled,label:e(`enable`),onChange:e=>{S(t,{enabled:e},o)}})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.row,children:[/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.rowText,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`period`)}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.desc,children:e(`stateNote`)})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.rangeRow,children:[/* @__PURE__ */ (0,a.jsx)(`input`,{className:u.range,type:`range`,min:1,max:10,step:1,value:t.periodSec,"aria-label":e(`period`),onChange:e=>{S(t,{periodSec:Number(e.currentTarget.value)},o)}}),/* @__PURE__ */ (0,a.jsxs)(`span`,{className:u.value,children:[t.periodSec,` `,e(`unitPerLoop`)]})]})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.row,children:[/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.rowText,children:/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`width`)})}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.rangeRow,children:[/* @__PURE__ */ (0,a.jsx)(`input`,{className:u.range,type:`range`,min:1,max:6,step:1,value:t.widthPx,"aria-label":e(`width`),onChange:e=>{S(t,{widthPx:Number(e.currentTarget.value)},o)}}),/* @__PURE__ */ (0,a.jsxs)(`span`,{className:u.value,children:[t.widthPx,` `,e(`unitPx`)]})]})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.stackRow,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`palette`)}),/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.chipGrid,children:b.map(n=>/* @__PURE__ */ (0,a.jsxs)(`button`,{type:`button`,className:t.palette===n.value?`${u.chip} ${u.chipActive}`:u.chip,onClick:()=>{S(t,{palette:n.value},o)},children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.swatch,style:{background:`conic-gradient(from 0deg, ${y[n.value]})`},"aria-hidden":`true`}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.chipLabel,children:e(n.key)})]},n.value))})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.row,children:[/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.rowText,children:/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`side`)})}),/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.chipRow,children:x.map(n=>/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,className:t.side===n.value?`${u.chip} ${u.chipActive}`:u.chip,onClick:()=>{S(t,{side:n.value},o)},children:e(n.key)},n.value))})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.row,children:[/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.rowText,children:/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`reverse`)})}),/* @__PURE__ */ (0,a.jsx)(i.Switch,{checked:t.reverse,label:e(`reverse`),onChange:e=>{S(t,{reverse:e},o)}})]}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:u.row,children:[/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.rowText,children:/* @__PURE__ */ (0,a.jsx)(`span`,{className:u.label,children:e(`breathe`)})}),/* @__PURE__ */ (0,a.jsx)(i.Switch,{checked:t.breathe,label:e(`breathe`),onChange:e=>{S(t,{breathe:e},o)}})]}),/* @__PURE__ */ (0,a.jsx)(`div`,{className:u.resetRow,children:/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,className:u.chip,onClick:()=>{let e={...d};n(e),_(e)},children:e(`reset`)})})]})}let w=`ui-composer-rainbow`,T={nav:`彩虹边框`,enable:`启用效果`,enableDesc:`沿聊天输入框边界流动的彩虹描边`,period:`流动速度`,width:`环带宽度`,unitPerLoop:`秒/圈`,unitPx:`px`,palette:`配色方案`,paletteRainbow:`经典彩虹`,paletteAurora:`极光青绿`,paletteSunset:`日落橙紫`,palettePeach:`蜜桃粉金`,paletteOcean:`海洋蓝紫`,paletteCyberpunk:`赛博霓虹`,paletteTheme:`跟随主题`,side:`显示位置`,sideAll:`四边`,sideTop:`仅顶边`,sideBottom:`仅底边`,reverse:`反向流动`,breathe:`呼吸明暗`,stateNote:`会话运行时自动加速，等待审批时琥珀提醒，出错时红色警示`,reset:`恢复默认`},E={nav:`Rainbow border`,enable:`Enable effect`,enableDesc:`A rainbow ring flowing along the composer border`,period:`Flow speed`,width:`Ring width`,unitPerLoop:`s/loop`,unitPx:`px`,palette:`Color scheme`,paletteRainbow:`Rainbow`,paletteAurora:`Aurora`,paletteSunset:`Sunset`,palettePeach:`Peach`,paletteOcean:`Ocean`,paletteCyberpunk:`Cyberpunk`,paletteTheme:`Follow theme`,side:`Placement`,sideAll:`All sides`,sideTop:`Top only`,sideBottom:`Bottom only`,reverse:`Reverse flow`,breathe:`Breathing`,stateNote:`Speeds up while running, amber while awaiting approval, red on errors`,reset:`Reset to defaults`};function D(){let e=Object.entries(y).map(([e,t])=>`
/* 配色方案：${e}。 */
html[data-rainbow-palette="${e}"] [data-composer-card]::before {
  background: conic-gradient(from var(--dsh-rainbow-angle), ${t});
}`).join(`
`);return`
/* 彩虹流动相位：注册为 <angle> 才能被 keyframes 插值（Chromium/Electron 支持）。 */
@property --dsh-rainbow-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

/* 默认变量：偏好服务在 <html> 上以内联样式覆盖（inline 优先于 :root 声明）。 */
:root {
  --dsh-rainbow-width: 2px;
  --dsh-rainbow-period: 4s;
  --dsh-rainbow-direction: normal;
}

/* 宿主输入框卡片（ui-conversation InputBar 的稳定 data 锚点）。 */
[data-composer-card] {
  position: relative;
}

/* 彩虹跑马灯环：conic-gradient 全色谱 + mask 挖空中部，只留边缘环带。
   ::before 画在卡片背景之上；pointer-events 关闭，不拦截任何交互。 */
[data-composer-card]::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--dsh-rainbow-width);
  background: conic-gradient(from var(--dsh-rainbow-angle), ${y.rainbow});
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: dsh-rainbow-flow var(--dsh-rainbow-period) linear infinite;
  animation-direction: var(--dsh-rainbow-direction);
  pointer-events: none;
  transition: filter 0.3s ease;
}

@keyframes dsh-rainbow-flow {
  to { --dsh-rainbow-angle: 360deg; }
}
${e}

/* 显示位置：仅顶边（mask 只保留顶部条带，颜色仍是环上对应弧段，随角度流动）。 */
html[data-rainbow-side="top"] [data-composer-card]::before {
  -webkit-mask: linear-gradient(180deg, #fff 0 var(--dsh-rainbow-width), transparent var(--dsh-rainbow-width));
  mask: linear-gradient(180deg, #fff 0 var(--dsh-rainbow-width), transparent var(--dsh-rainbow-width));
}

/* 显示位置：仅底边。 */
html[data-rainbow-side="bottom"] [data-composer-card]::before {
  -webkit-mask: linear-gradient(180deg, transparent calc(100% - var(--dsh-rainbow-width)), #fff calc(100% - var(--dsh-rainbow-width)));
  mask: linear-gradient(180deg, transparent calc(100% - var(--dsh-rainbow-width)), #fff calc(100% - var(--dsh-rainbow-width)));
}

/* 呼吸明暗：叠加第二个动画（opacity 周期变化，周期随流速放大一倍）。 */
@keyframes dsh-rainbow-breathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
}

html[data-rainbow-breathe] [data-composer-card]::before {
  animation: dsh-rainbow-flow var(--dsh-rainbow-period) linear infinite,
    dsh-rainbow-breathe calc(var(--dsh-rainbow-period) * 2) ease-in-out infinite;
}

/* 会话运行中：流动加速（状态桥把 running 投影到 <html data-rainbow-state>）。 */
html[data-rainbow-state="running"] [data-composer-card] {
  --dsh-rainbow-period: 1.2s;
}

/* 审批等待：琥珀色配色 + 缓慢脉冲（pendingInteraction 由状态桥投影）。 */
html[data-rainbow-state="attention"] [data-composer-card]::before {
  background: conic-gradient(from var(--dsh-rainbow-angle), #f59e0b, #fbbf24, #fcd34d, #f59e0b, #d97706, #f59e0b);
  animation: dsh-rainbow-flow 3s linear infinite, dsh-rainbow-error-pulse 2s ease-in-out infinite;
}

/* 会话出错：红色警示配色 + 快速脉冲。 */
@keyframes dsh-rainbow-error-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

html[data-rainbow-state="error"] [data-composer-card]::before {
  background: conic-gradient(from var(--dsh-rainbow-angle), #ef4444, #f87171, #fca5a5, #ef4444, #dc2626, #ef4444);
  animation: dsh-rainbow-flow 1s linear infinite, dsh-rainbow-error-pulse 1.2s ease-in-out infinite;
}

/* 回合完成庆祝：快转一圈并提亮回落（标记由状态桥 0.9s 后移除）。
   首尾 opacity 都等于常态 1，起止平滑。 */
@keyframes dsh-rainbow-celebrate {
  0% { opacity: 1; }
  40% { opacity: 1; }
  60% { opacity: 0.4; }
  100% { opacity: 1; }
}

html[data-rainbow-celebrate] [data-composer-card]::before {
  animation: dsh-rainbow-flow 0.9s linear 1, dsh-rainbow-celebrate 0.9s ease-out 1;
}

/* 输入框聚焦时环更亮更饱和，失焦平滑回落。 */
[data-composer-card]:focus-within::before {
  filter: brightness(1.25) saturate(1.15);
}

/* 总开关关闭：隐藏伪元素（偏好服务在 <html data-rainbow-off> 上打标记）。 */
html[data-rainbow-off] [data-composer-card]::before {
  display: none;
}

/* 用户开启"减弱动态效果"时停用全部动画，保留静态描边。 */
@media (prefers-reduced-motion: reduce) {
  [data-composer-card]::before {
    animation: none;
  }
}
`}let O=[`slots`,`locale`];function k(e){e.effect(()=>{let e=document.createElement(`style`);return e.dataset.plugin=`@kenz1117/dsh-ui-composer-rainbow`,e.textContent=D(),document.head.appendChild(e),()=>{e.remove()}},`ui-composer-rainbow: rainbow border stylesheet`),e.effect(()=>(v(g()),()=>{let e=document.documentElement;delete e.dataset.rainbowOff,delete e.dataset.rainbowPalette,delete e.dataset.rainbowSide,delete e.dataset.rainbowBreathe,e.style.removeProperty(`--dsh-rainbow-period`),e.style.removeProperty(`--dsh-rainbow-width`),e.style.removeProperty(`--dsh-rainbow-direction`)}),`ui-composer-rainbow: initial preference application`),e.effect(()=>e.locale.register(w,{zh:T,en:E}),`ui-composer-rainbow: dictionaries`);let t=e.locale.bind(w);e.slots.inject(`settings.section`,()=>e.slots.register({name:`settings.section`,id:`composer-rainbow`,order:90,label:()=>t(`nav`),locale:w},C)),e.slots.inject(`conversation.composer.dock`,()=>e.slots.register({name:`conversation.composer.dock`,id:`composer-rainbow-state`,order:90},c))}return n.apply=k,n.inject=O,t.exports}});
//# sourceMappingURL=client.js.map