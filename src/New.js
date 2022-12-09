import { useState } from 'react'

const  data = [
    
    {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  }

]
const New = () => {
 const [datas,setDatas] = useState(data);
setDatas(data);
   console.log(datas)
  return (
    <div>
    
      {datas.map(item => {
        return <li>{item.age}</li>;
      })}

    </div>
  )
}

export default New