import React, { createContext, useContext, useState } from "react";

const Emp = createContext();

function Employess(){
 let context = useContext(Emp);
   return(
          <div>
            
             <h1>Welcome to Employess Component...</h1>
               <p>Employee ID : <b>{context.Id}</b></p>
               <p>Employee Name : <b>{context.Name}</b></p>
                <Salary/>
          </div>
   )
}

function Salary () {
    let Context = useContext(Emp)
    return(

        <div>
           <h1>Welcome to Employess Component..</h1>
           
           <p>Employee ID : <b>{Context.Name}</b></p>
           <p>Employee ID : <b>{Context.Salary}</b></p>
              

        </div>

    )
}

const Main = () =>{
    const [employee] = useState({
        Id:101,Name:'Pragim',
       Location:'Bangalore',Salary:12345
    })
    return(
        <div>
         <Emp.Provider value={employee} >
             <Employess/>  
         </Emp.Provider>
   
        </div>
    )
}
export default Main;