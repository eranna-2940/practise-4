import React, { useState } from 'react'

const Apps = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
         console.log(data);

    }
 const { username, password } = data;
    return (
        <div>

            <h1>Login-form</h1>

            <form onSubmit={handlesubmit}>

                <input type="text" name='username' placeholder="Enter a name" value={username} onChange={handlechange} /><br />
                <input type="password" name='password' placeholder="Enter a password" value={password} onChange={handlechange} /><br /><br />
                <input type='submit' name='submit' />

                   <h1>{username}</h1><br/>
                   <h1>{password}</h1>
            </form>


        </div>

    )
}

export default Apps;