//You can call the arrow function only after u declare it unlike normal function 

const myfunction =() =>{
    console.log("My name is Khan")
}
myfunction()

const myfunction1 =(argu) => argu = argu + 10 

console.log(myfunction1(1))

const myfunction2 =argu => argu = argu + 10 

console.log(myfunction2(1))