
import './App.css';
import React,{useState,useEffect} from 'react';

// import Header from './components/header';
//import Custom from './custom';
// import app1 from './App1';

// console.log("hello" && "mau" && undefined)
// const age= 20

// function clickfun(){
//   console.log("You Just Clicked me")
// }

// let count=0

// const quotes=["My name is Khan and I'm not a terrorist ", "Live life Queen Size ", "Nothing comes out of nothing ", "Consistency doen't promise u success but inconsistency will make sure that u never succeed ","Man wants everything that destroy him "]

function App() {
    /* Example for useEffect with random function*/ 

const [count,setCounter] = useState(0)

   useEffect(() => {
     console.log("You Ran Me ", count)
   }, [count])

   
   function inCount(){
     // setCounter(count+1)
     setCounter(oldvalue => oldvalue + 1)
   }
   function deCount(){
     // setCounter(count-1)
     setCounter(oldvalue => oldvalue - 1)
   }
    
      return <div className="Counter">

       <header className="Click-Counter">
  
         <h1>Counter : {count}</h1>
         <button onClick={inCount}>Increment</button>
         <button onClick={deCount}>Decrement</button>

         </header>
      </div>



 // function App() {
    /* Example for useState with random function*/ 
//     const [quote,setQuote]=useState(quotes[0])

//     function randomQuotes(){
//         const rand=quotes[Math.floor(Math.random() * quotes.length )]
//         setQuote(rand)
//     }

//     return <div className="Quotations">
//         <header className='App-header'>

//             <div className='Quote'>{quote}</div>
//             <button onClick={randomQuotes}>Change Quotes</button>
     

       
//          </header>
//       </div>
  


// function App() {
//   const [count,setCounter] = useState(0)

//   function inCount(){
//     // setCounter(count+1)
//     setCounter(oldvalue => oldvalue + 1)
//   }
//   function deCount(){
//     // setCounter(count-1)
//     setCounter(oldvalue => oldvalue - 1)
//   }
    
//      return <div className="Counter">

//       <header className="Click-Counter">
  
//         <h1>Counter : {count}</h1>
//         <button onClick={inCount}>Increment</button>
//         <button onClick={deCount}>Decrement</button>

       
//       </header>
//      </div>

    // <div className="App">

    //   <header className="App-header">
  
    //   <Header />

    //   <div id='content'>
    //     <p> Hello Guys {2**2}</p>
    //     {age<18 ? <p>Hi Guys</p> : <p>Bye Guys</p>}

    //     {/*  ~~~props = {name:Mr.khan} */}
    //     <Custom name='Mr.Khan'> </Custom>
    //     <button onClick={clickfun}>Click me</button>

    //   </div>


        
    //   </header>
    // </div>
  
}

export default App;
