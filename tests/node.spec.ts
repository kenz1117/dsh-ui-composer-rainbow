/** node 半冒烟测试：载体可加载、apply 可调用且无副作用。 */
import { describe, expect, it } from 'vitest'
import { apply } from '../src/index.ts'

describe('node half', () => {
  it('apply 是空载体调用（不抛错、无返回值）', () => {
    expect(() => apply(undefined)).not.toThrow()
    expect(apply(undefined)).toBeUndefined()
  })
})
