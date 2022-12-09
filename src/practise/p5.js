import React, { useState } from "react";

const Add = () =>{
  
    const [data,setData] = useState([]);
       
   const handleclick=() =>{
       const list = [...data]

       list.push(list.length+1)
      setData(list)


   }
    
    return (

        <div>
              
               <h1>Number length {data.length}</h1>
              <ul>
                {
                    data.map((e,i) =>{
                        return <li key={i}>{e}</li>
                    })
                }
              </ul>

              <button onClick={handleclick}>ADD NEW VALUE</button>
            
        </div>
    )
}

export default Add;