const myobj  = {'k1':'v1',
'k2':{'k2.1':'v2.1'},
'k3':{'k3.1':function myname(){
    console.log("BABAJAN_M")
}
},k4:'v4',k5:'v5'}

console.log(myobj['k2']['k2.1'])
console.log(myobj['k1'])
console.log(myobj['k3']['k3.1'])
console.log(myobj['k5'])
console.log(myobj['k4'])
console.log(myobj.k4)
