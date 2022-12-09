import React, { useState } from 'react'
import './App.css';
const Calculator = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
 
  const handlechange = e =>{
    setInput(e.target.value);
  }

  return (
    <div>
            <center>
                    <h1>Calculator</h1>
                
                    <input type="text" name='input' value={input} onChange={handlechange}/>
                     <button className='btn' onClick = {() => setResult (eval(input))}>Result</button>

                
                     
                    <button onClick={()=> setInput(input+"0")}>0</button>
                    <button onClick={()=> setInput(input+"1")}>1</button>
                    <button onClick={()=> setInput(input+"2")}>2</button>
                    <button onClick={()=> setInput(input+"3")}>3</button><br />

                    <button onClick={()=> setInput(input+"4")}>4</button>
                    <button onClick={()=> setInput(input+"5")}>5</button>
                    <button onClick={()=> setInput(input+"6")}>6</button>
                    <button onClick={()=> setInput(input+"7")}>7</button><br />

                    <button onClick={()=> setInput(input+"8")}>8</button>
                    <button onClick={()=> setInput(input+"9")}>9</button>
                    <button onClick={()=> setInput(input+"+")}>+</button>
                    <button onClick={()=> setInput(input+"/")}>/</button><br/>

                    <button onClick={()=> setInput(input+"*")}>*</button>
                    <button onClick={()=> setInput(input+"-")}>-</button>
                    <button onClick={()=> setInput(input+"=")}>=</button>
                    <button onClick={()=> setInput("")}>cl</button>
                    <h4>Result is : {result}</h4>

            </center>
    </div>
  )
}

export default Calculator