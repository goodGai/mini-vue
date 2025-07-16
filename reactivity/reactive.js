import { handler } from './handler.js'
import { isObject } from '../utils/index.js'

const reactive = (target) => {
    if (!isObject(target)) {
        console.warn(`target ${target} 必须是一个对象`)
        return target
    }
    return new Proxy(target, handler)
}

export {
    reactive,
}