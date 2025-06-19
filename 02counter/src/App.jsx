import { useState } from 'react';
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  function increase(){
    if (count<20){ 
      setCount(count+1);
    }
   
  }
  function reset(){
    setCount(0)
  }
  function decrease(){
    if (count>0){
setCount(count-1)
    }
    
  }

  return (
    <>
  <h1>Counter</h1>
  <h1>{count}</h1>
  <button onClick={increase}>Increase {count}</button>
  <button onClick={reset}>Reset {count}</button>
  <button onClick={decrease}>Decrease</button>
    </>
  )
}
  

  


export default App
