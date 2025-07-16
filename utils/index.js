/**
 * 判断是否为对象
 * @param {*} object 
 * @returns Boolean
 */
export const isObject = (object) => {
    return object !== null && typeof object === 'object'
}