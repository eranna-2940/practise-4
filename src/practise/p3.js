import React, { useState ,useCallback}  from "react";
import Todos from "./Memos";

const Callback = () =>{
const [count,setCount] = useState(0);
const [todo,setTodo] = useState([]);

 const handleclick = () =>{
    setCount(count+1)
 }

const handleset = useCallback(() =>{
    setTodo((value) =>[...value, "New Task Added"])

// eslint-disable-next-line react-hooks/exhaustive-deps
},[todo])

    return (

        <div>
             <h1>count Increment</h1>
                 
        <button onClick={handleclick}>Increment</button>
               <p>count: {count}</p>
               
               <Todos todo={todo} handleset={handleset} />
        </div>
    )
}

export default Callback;