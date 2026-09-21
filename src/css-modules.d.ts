/** CSS Modules 的类型声明（lightningcss 构建管道在打包时内联为 style 标签）。 */
declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
