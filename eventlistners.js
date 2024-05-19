const btn=document.querySelector('#incri')
const dbtn=document.querySelector('#decri')

const li =document.createElement('li')

let count=0
function incri_count(){
    const count_ele = document.getElementById('counter')
    count++
    count_ele.innerText = count

    const li =document.createElement('li')
    li.setAttribute('data-counter', count)

// You can make many such arrangements and manipulation with JS in CSS of a page we would find it in documentation called mozilladevelopernetwork


    // const bold =document.createElement('b')

    // const tnode =document.createTextNode('KHAN ')
    // bold.appendChild(tnode)
    
    // const tnode2 =document.createTextNode(count)
    // li.appendChild(bold)
    // li.appendChild(tnode2)

    // if((count % 2 ===0 )){
    //     li.setAttribute('class', 'Purple')
    // }
    // else{
    //     li.setAttribute('class', 'yellow')
    // }

    if((count % 2 ===0 )){
            li.style.background='plum'
            ulele.style.background='plum'
        }
        else{
            li.style.color='black'
            li.style.background='yellow'
            ulele.style.background='yellow'
        }

    li.innerHTML='<b>KHAN :'+ count
    ulele.appendChild(li)
 
}
function decri_count(){
    // const count_ele = document.getElementById('counter')
    // count--
    // count_ele.innerText = count

    const li =ulele.querySelector('[data-counter="'+ count+'"]')
//     const num =parseInt(li.getAttribute('data-counter'),10)

//   if(num % 2 === 0){
//     li.remove()
//   }


    li.remove()
    
    const count_ele = document.getElementById('counter')
    count--
    count_ele.innerText = count
   

 
}

const ulele=document.getElementById('l-item')



btn.addEventListener('click',incri_count)
dbtn.addEventListener('click',decri_count)
