const voters =[{ name: 'Raju',age:'21'},{ name: 'Rahul',age:'23'},{ name: 'Raju',age:'17'}]

const arr =[1,2,3,4,5,6,8]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

const same_as_for_but_will_map_newarray = arr.map(function (ele){
    console.log('\n'+ ele)
})

//similarly simplified version of same above
const same_as_for_but_will_map_newarray1 = arr.map(ele => ele)
console.log(same_as_for_but_will_map_newarray1)

const same_as_for_but_will_map_newarray2 = arr.map (ele =>  ele ** 2 )
console.log(same_as_for_but_will_map_newarray2)


const same_as_for_but_will_filter_newarray = voters.filter (ele =>  ele.age > 18 )
console.log(same_as_for_but_will_filter_newarray)

const finder= voters.find(ele =>  ele.age === '17' )
console.log(finder)

voters.forEach(ele =>{ console.log(ele)} )



