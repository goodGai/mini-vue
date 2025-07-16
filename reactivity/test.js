import { reactive } from "./reactive.js";

const obj = reactive({
    name: '张三',
    age: 18
})

obj.age++
console.log('obj', obj)

