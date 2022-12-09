import React, { useState } from 'react'

import Test from './test'

const Control = () => {
const [data, setData] = useState('');

const handlchange = e =>{
    setData(e.target.value);
}

  return (
    <div>
          <center>

            <input type="text" onChange={handlchange} /> <br /><br />
            <Test  handlchange={handlchange}/><br /><br />
            Name: {data}
          
          </center>





    </div>
  )
}

export default Control