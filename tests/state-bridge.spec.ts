/** 会话状态投影与合成测试（桥组件的 effect 只写 dataset，逻辑集中在两个纯函数）。 */
import { describe, expect, it } from 'vitest'
import { effectiveState, rainbowStateOf } from '../src/client/state-bridge.tsx'

describe('rainbowStateOf', () => {
  it('空闲：不 running 且无任何错误', () => {
    expect(rainbowStateOf({ running: false, promptError: null, lastAgentError: null })).toBe('idle')
  })

  it('运行中：running 且无错误', () => {
    expect(rainbowStateOf({ running: true, promptError: null, lastAgentError: null })).toBe('running')
  })

  it('发送/停止失败（promptError）优先于运行中', () => {
    expect(rainbowStateOf({ running: true, promptError: { message: 'boom' }, lastAgentError: null })).toBe('error')
  })

  it('agent 回合错误（lastAgentError）同样进入警示态', () => {
    expect(rainbowStateOf({ running: false, promptError: null, lastAgentError: 'tool crashed' })).toBe('error')
    expect(rainbowStateOf({ running: true, promptError: null, lastAgentError: 'tool crashed' })).toBe('error')
  })
})

describe('effectiveState', () => {
  it('出错最高优先：attention 与 running 都让位', () => {
    expect(effectiveState(true, 'error')).toBe('error')
    expect(effectiveState(false, 'error')).toBe('error')
  })

  it('审批等待优先于运行中与空闲', () => {
    expect(effectiveState(true, 'running')).toBe('attention')
    expect(effectiveState(true, 'idle')).toBe('attention')
  })

  it('无审批时透传会话状态', () => {
    expect(effectiveState(false, 'running')).toBe('running')
    expect(effectiveState(false, 'idle')).toBe('idle')
  })
})
