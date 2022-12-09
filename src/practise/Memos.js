import React ,{memo} from "react";


const Todos = ({todo, handleset }) =>{
   // console.log("child render")
    return(
        <div>
            <h1>Todo App</h1> 
        
        <button onClick={handleset}>set added</button>

             {
               todo.map((e,index) =>{
                 return <li key={index}>{e}</li>
               })
             }

        </div>
    )
 }

 export default memo(Todos);
