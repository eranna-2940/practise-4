import React, { useState } from 'react';

const Reverse = () =>{
const [data,setData] = useState(['']);

 const handlechange = (e) =>{
     setData(e.target.value);
 }


  let reverseArray = [...data].reverse();
  console.log(reverseArray)


    return (
        <div>
            <h1>Reverse output</h1>
              
              <form>

                   <label>Input :</label>
                    <input type='text' name='text' placeholder="Enter the text" onChange={handlechange} />
                         
                         <h1>output : {reverseArray}</h1>

                           
                          
              </form>

        </div>
    )
}

export default Reverse;