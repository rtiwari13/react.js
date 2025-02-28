import { useState } from 'react'

import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  // let counter = 15

  const increaseValue = () => {
    console.log("clicked", counter)
    counter = counter+1
    setCounter(counter)
  }

  const decreaseValue = () =>{
    console.log("clicked", counter)
    if(counter>0){
      counter = counter-1
    }
    setCounter(counter)
  }

  return (
    <>

      <h1>MAKE IT COUNT</h1>
      <h3>Counter value  :  {counter} </h3>

      <div class="button-container">
      <button onClick={increaseValue}>Increase Value :  {counter}</button>
      <button onClick={decreaseValue}>Decrease value :  {counter}</button>

      </div>

    </>
  )
}

export default App
