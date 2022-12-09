import React from "react";


  
const CarName =(props) =>{
    //  return <h1>i am have a good {props.brand}</h1>
     return alert(`hello ${props.brand}`);
}

const  Props1 = () =>{
    
     return(
        <div>
         <CarName brand ='hello' />
        </div>
     )
}

export default Props1;