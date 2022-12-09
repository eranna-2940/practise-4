import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axiosdata = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
       axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
         setData(res.data)
       )
  },[])
  return (
    <div>

        <h1>Get data from Axios</h1>
           {
            data.map(ele =>
               <li>{ele.name}</li>

            )
           }

    </div>
  )
}

export default Axiosdata