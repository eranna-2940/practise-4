/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";

const Count = () =>{
    const [value,setValue] = useState([]);
    let count = useRef(0);
    const handleclick = (e) =>{
    e.preventDefault();
       count.current = count.current + 1
     console.log(count.current);
     setValue(count.current)
 }
    return(
        <div>
              <h1>count</h1>
               <button onClick={handleclick}>Click</button>
               <div>
               {value}
               </div>
              
        </div>
    )
}
export default Count;