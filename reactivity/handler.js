import { track } from './effect.js'
const get = (target, key) => {
    console.log('get', target, key)
    // 依赖收集
    track(target, key)
    // TODO: 为什么这里需要用Reflect？
    return target[key]
}

const set = (target, key, val, proxy) => {
    console.log('set', target, key, val, proxy)
    // TODO：派发更新
    // TODO: 为什么这里需要用Reflect？
    target[key] = val
    return true
}

export const handler = {
    get,
    set,
}