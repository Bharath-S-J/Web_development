// const head=document.querySelector('h1')
const head=document.querySelector('#head1')
// const head=document.querySelector('.head1')

head.innerText = 'My Name is Jan'
console.log(head)

const allselect=document.querySelectorAll('ul li')
for(let i=0;i<allselect.length;i++){
    const selitems=allselect[i]
    selitems.innerText = 'Object 1'
}
console.log(allselect)

const para=document.getElementById(p1)