import React, { useState } from "react";


const Upper =() =>{
const [data,setValue] = useState("");

const handlechange = (e) =>{
    setValue(e.target.value)
}

const value = data.toUpperCase();
    return(
        <div>
              <h1>Capital letters</h1>

              <input type='text' name='name' placeholder="enter the name" onChange={handlechange} />
                        
                        <p>{value}</p>

        </div>
    )
}

export default Upper;