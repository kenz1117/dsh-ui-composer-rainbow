/**
 * Composer rainbow 装饰插件，node 半。
 *
 * 纯浏览器装饰：视觉效果全部由 client 半（src/client）注入的样式表实现，
 * node 半只是宿主 Loader 要求的 cordis 载体（main 可加载、apply 可调用），
 * 不持有任何宿主侧状态、路由或配置。
 */

/**
 * Node plugin body: 无宿主侧逻辑的空实现。
 * @param _ctx - host root context（本插件不消费）。
 */
export function apply(_ctx: unknown): void {
  // 空载体：client 半的生命周期（样式表挂载/卸载）由其自身 effect 承担。
}
