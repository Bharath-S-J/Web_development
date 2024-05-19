function voting(agee)
{
    if(agee >= 18){ return true }
    else { return false }
  
}

const eligibility = voting(34)
if (eligibility){
    console.log("U are elegible to vote please do vote!!!") 
}
else {
    console.log("U aren't elegible to vote please wait untill u turn 18 to vote!!!") 
}

let eligibility2 = voting2(34,"Indian")

function voting2(agee,citizen)
{
    if(agee >= 18 && citizen =="Indian")
    { return true }

    else { return false }
  
}

if (eligibility2){
    console.log("U are elegible to vote please do vote!!!") 
}
else {
    console.log("U aren't elegible to vote !!!") 
}

eligibility2 = voting2(34,"Italian")
