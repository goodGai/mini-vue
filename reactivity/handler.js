const get = (resource, key) => {
    console.log('get', resource, key)
    return resource[key]
}

const set = (resource, key, val, proxy) => {
    console.log('set', resource, key, val, proxy)
    resource[key] = val
    return true
}

export const handler = {
    get,
    set,
}