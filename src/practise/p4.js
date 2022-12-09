/* eslint-disable array-callback-return */
import React, { useState } from "react";


function Effect () {
     const [list,setList] = useState([1,2,3,4,5])


     const handlevalue = () =>{
        const lists = [...list]
          lists.push(lists.length+1);
          setList(lists);
     }

    return (
        <div>
             
             <h1>Use Effect {list.length}</h1>
   
           <ul>
              {
                list.map((item,index) =>{
                    return <li key={index}>{item}</li>
                })
              }
           </ul>
     
           <button onClick={handlevalue}>ADD NEW VALUE</button>

        </div>
    )
}

export default Effect;