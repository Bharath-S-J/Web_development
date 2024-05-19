// import { useState } from "react";
import { useQuery } from "react-query";


// function Button(){
//   const{data,error}=useQuery('mr-khan2',() =>{
//        return new Promise (resolve => { setTimeout(()=> resolve(Math.random()),1000)
//       })
// })

// console.log({data,error})

// return<button className="px-2 py-3 mx-[10px] bg-yellow-500 text-gray-100">I'm a Button </button>
// }

// const fetcher = () => {
//   return new Promise(resolve => {
//   return setTimeout(resolve,1000)
//   })
// }

// const fetcher = (repo) => {
//    return fetch(`https://api.github.com/users/${repo}`).then(res => res.json())

//  }
function App() {
  useQuery(['Item1',1])
  
  // const [state, setState]= useState(false)
  // const {isloading,data}= useQuery(['github-data','facebook/react'],() => fetcher('facebook/react'))

  // if(isloading){
  //   return <h2>Loading...</h2>
  // }

  // const[state,setState]=useState(false)
  // useQuery(['Item1',1],fetcher,{
  //   enabled:state
  // })
  // useQuery(['Item1',1])

  //  const[visible,setVisible]=useState(true)

  //  function togglebtn(){
  //   setVisible( visible=> !visible )
  //  }

  // const{data,error,isLoading,isError,isSuccess,isIdle}=useQuery('mr-khan2',() =>{
  //   // return Promise.resolve(555)
  //   // return Promise.reject(5)
  //   return new Promise (resolve => setTimeout(resolve,1000))
  // })
  // console.log({data,error,isLoading,isError,isSuccess,isIdle})
  
  // const [x,setX]=useState(false)

  return (

  //  <div className={x ? 'dark' : '' } onClick={() => setX(x => !x)}>
  <div className="App">





      
        {/* <h2>Name :{data.name}</h2>
        <h2>Id :{data.id}</h2>
        <h2>Bio:{data.bio}</h2> */}
        {/* <h2>Name :{data.name}</h2>
        <h2>Desc :{data.description}</h2>
        <h2>Stars:{data.stargazers_count}</h2> */}
        {/* <header className="dark:bg-gray-800 dark:text-white h-screen text-center"> */}
    {/*    <h1 className='text-white hover:[background:black] mx:[50vm] my:[70vm] inline bg-cyan-500 text-3xl'>My Name Is Khan</h1> */}
       {/* {visible && <Button/>}
       <button className="px-2 py-3 mx-[10px] my-[15px] bg-cyan-500 text-gray-100 " onClick={togglebtn}>Toggle</button> */}

       {/* <button className="px-2 py-3 mx-[10px] my-[15px] bg-cyan-500 text-gray-100 " onClick={() => setState(c => !c)}>Click Me</button>  */}
      {/* </header> */}
    </div>
  );
}

export default App;
