// Define an object p1 with properties name and age
const p1 = {
    name: 'Sam',
    age: '23'
}

// Define an object p2 with properties name and age
const p2 = {
    name: 'Samuel',
    age: '43'
}

// Define a function that mutates the age property of the passed object
function mutate(obj) {
    obj.age++ // Increment the age property by 1
}

// When used, primitive copy is passed
// When used, object address/reference is passed

// Call the mutate function with p1, which will mutate the age property of p1
mutate(p1)
console.log(p1) // Output the mutated p1 object

// Define a variable num with an initial value of 30
let num = 30

// Define a function that tries to mutate the passed primitive number
function premitivemutate(num) {
    num++ // Increment the local num variable by 1
    console.log(num) // Output the local num variable
}

// Call the premitivemutate function with num, which will not affect the original num
premitivemutate(num)
console.log(num) // Output the original num variable, unchanged
