import React, { useState } from "react";
import './reg.css';
const Register = () =>{
    //  const [fname,setFname] = useState('');
    //  const [lname,setLname] = useState('');
    //  const [email,setEmail] = useState('');
     const [data,setData] = useState([{
      fname:'',
      lname:'',
      email:''
     }]);

     

      // const handlesubmit= (e) =>{
      //   e.preventDefault();
      //    const date= {fname,lname,email}
      //   if(fname&&lname&&email){
      //     setData((Is) =>[...Is,date])
      //     setFname('');
      //     setLname('')
      //     setEmail('')
      //   }


      // }
  

        const handlechange =(e)=>{
            setData({...data,[e.target.name]:e.target.value});
            
        }
        const handlesubmit =(e)=>{
          e.preventDefault();
         const result = Object.values(data);
          setData(result);
              



        }

     const deleteHandler =(i)=>{
      const list = [...data];
      list.splice(i, 1);
       setData(list);
     }
      return (
        <div>

            <center>
             <h1>Registeration Form</h1>
             </center>
            <form onSubmit={handlesubmit} >
                  <label>Name :</label>
                  <input type='text' name="fname"   placeholder="enter name" onChange={handlechange} /><br />
                  <label>LastName :</label>
                  <input type='text' name="lname" placeholder="enter lastname" onChange={handlechange} /><br />
                  <label>Email :</label>
                  <input type='email' name="email"  placeholder="enter email" onChange={handlechange} /><br />
                  <input type="submit"  value="Submit" />
            </form>
            <div className="col-md-4">
                  {
                    data.map((list,i)=>(
                         <div className="border" >
                          <p key={i}>FirstName : {list.fname}</p>
                          <p key={i}>LastName : {list.lname}</p>
                          <p key={i}>Email: {list.email}</p>
                          <button className="btn btn-primary" 
                          onClick={() =>deleteHandler(i)}
                          
                          >Delete</button>
                         </div>
                        

                    ))
                  }
           
        </div> 

                    

       </div> 
      )
}

export default Register;