
import lodash from "lodash"

const add = (num1:number,num2:number):number=>{
    return lodash.add(num1,num2)
}

const sub=(num1:number,num2:number):number=>{
    return lodash.subtract(num1,num2);
}

const mul=(num1:number,num2:number):number=>{
    return lodash.multiply(num1,num2);
}

const div=(num1:number,num2:number):number=>{
    return lodash.divide(num1,num2);
}

export {add,sub,mul,div};