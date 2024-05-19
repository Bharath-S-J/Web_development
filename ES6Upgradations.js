const arr1 =[1,2,3,4]
const arr2 =[2,3,4,5]

const arr3 =[arr1,arr2]
console.log(arr3)


const arr4 =[...arr1,...arr2]
console.log(arr4)

const arr6 =[{k1:'[a,b,c]'}]
const arr7 =[{k2:'[d,e,f]'}]

const arr5 =[...arr6,...arr7]
console.log(arr5)

const arr8 =[arr6,arr6]
console.log(arr8)

const k5= 'Randy'

const obj1={k3:'[a,b,c]'}
const obj2={k4:'[e,f,g]'}

const obj3={...obj1, ...obj2,k5}

console.log(obj3)