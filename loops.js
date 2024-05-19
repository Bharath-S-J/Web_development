let frnds=[]
function frndcircle(newfrnd)
{
    frnds.push(newfrnd)
    console.log(frnds)
    console.log("Currently my frndcircle has "+frnds.length+" members\n")
}

frndcircle("Bharath")
frndcircle("Abhi")
frndcircle("Amogh")
frndcircle("Abdul")

for (let i=0;i<3;i++){
    frnds.pop()
    if (i==0){console.log("May be after college ends I might hv " + frnds.length +" frnds  as last frnd might go\n")}
    if (i==1){console.log("May be after  that it might hv " + frnds.length +" members as last frnd might go\n")}
    if (i==2){console.log("May be after  that it might hv " + frnds.length +" members as last frnd might go\n") }
}
console.log("May be lastly I would hv no one in my current friend circle as past friends would be : " + frnds.length+"\n")

let fnos=[]

for (let i=0;i<=20;i++){ 
    if (i%2==0){fnos.push(i)}
}
console.log("This is an array of numbers divisible by 2 : " + fnos+"\n")

for (let i=0;i<=20;i+=2){ 
    if(i==10){ continue }
    if(i==20){ break }

        fnos.push(i)

}

console.log("This is an array of numbers divisible by 2 : " + fnos+"\n")