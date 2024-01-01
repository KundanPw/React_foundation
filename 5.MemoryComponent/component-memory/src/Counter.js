import { useState } from "react";


function Counter() {
  const [x, setX] = useState(10);
  const [count, setCount] = useState(10);
  const [text, setText] = useState("")
  return (
    <div>
        <span id="counterValue">x: {x}</span> <br/>
        <span id="counterValue">count: {count}</span> <br/>
        
        <button onClick={ () => setX(x+1)}>Click and Update X</button> <br/>
        <button onClick={ () => setCount(count+1)}>Click and Update Count</button> <br/> <br />

        <input type="text" onChange={ (event) => setText(event.target.value)}/> <br/>
        <button>Add</button>
        <span>{text}</span> <br/>
        
    </div>
  )
}

export default Counter;