import React from "react";

const  Hoc = (Component) =>{
   return(
    class extends React.Component{
        render(){
            return(
                <div className="block"> 
                   <Component/>
                </div>
            )
        }
    }
   )
}

export default Hoc;