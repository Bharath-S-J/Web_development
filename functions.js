function consolelog()
{
    console.log("Avg age of us is always sum and divided by number")
}
consolelog()



function avg(uage){

const age1 = [20,10,22,12,21,18]
const totage = age1[0]+ age1[1]+ age1[2]+ age1[3]+ age1[4]+ age1[5] + uage
const noofus = (age1.length) + 1
console.log(age1.length)
console.log("Avg age of us :" + totage/noofus )

}
avg(7)


function agemath(agee,addfactor)
{
    return(agee + addfactor)
}

const myage = agemath(10,34)
console.log("My age will be "+ myage +" after 34 years ")
