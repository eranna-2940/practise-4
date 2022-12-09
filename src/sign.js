import React, { useState } from 'react'

const Sign = () => {
const [data, setData] = useState({
  username : "",
  email    : "",
  password : "",
  confirm :  "",
})

const handlechange = (e) =>{
  setData({...data,[e.target.name]:e.target.value})
}

const handlesumit = (e) =>{
  e.preventDefault();
if(username.length <= 0 ){
  alert("please fill data")
}else if(password === confirm){
   console.log(data);
  }else{
   
    alert ("password not match")
  }

}

const {username,email,password,confirm} = data;
  return (
    <div>
          <h1>Sign-up</h1>

          <form onSubmit={handlesumit}>
                 
            <input type="text" name="username" placeholder="Enter a username" value={username} onChange={handlechange} /><br/>
            <input type="email" name="email" placeholder="Enter a email" value={email} onChange={handlechange}/><br/>
            <input type="password" name="password" placeholder="Enter a password" value={password} onChange={handlechange} /><br/>
            <input type="password" name="confirm" placeholder="Enter a cpassword" value={confirm} onChange={handlechange} /><br/>
            <input type="submit" name="submit"  />
               


               












          </form>


    </div>
  )
}

export default Sign;