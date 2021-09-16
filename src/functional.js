const add = (a, b, c ) => {
    return a + b + c
}


const curry = fn => {
    const arity = fn.length
    function f1(...args){
     if(args.length >= arity){
         return fn(...args)
     }   else {
         return function f2(...moreArgs){
             const newArgs = args.concat(moreArgs)
             return f1(...newArgs)
         }
     }
    }
    return f1
}

console.log(add(1,2,3))

const curriedAdd = curry(add)

console.log(curriedAdd(1)(2)(3))


const users = [
    {
        id: 1,
        name: 'Vijay'
    },
    {
        id: 2,
        name: 'Radha'
    },
    {
        id: 3,
        name: 'Jarvis'
    }
]


const getProp = (prop, obj) => {
    return obj[prop]
}

const getName = curry(getProp)('name')
const getIds = curry(getProp)('id')

const names = users.map(getName)
const ids = users.map(getIds)

console.log(names, ids)
