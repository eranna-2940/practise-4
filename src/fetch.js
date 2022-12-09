import React, { useEffect, useState } from 'react'


const Fetch = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState([]);
    const [value2, setValue2] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(json => setData(json));
    }, [])

    const handledelete = (id) => {
        const newtodos = data.filter(
            (todo) => todo.id !== id
        );
        setData(newtodos);
    };
    const items = data.slice(value, value2).map(i=>{
        return <li>{i.id} . {i.title}
        <button onClick={() => {handledelete(i.id)}}>Delete</button>
        </li>
    })
   
    return (

        <div>

            <h1>Fetch user data : {items.length}</h1>


            <input type='text' name='numbers' id='add' onChange={e =>setValue(e.target.value -1)} />
            <input type='text' name='number' id='add2' onChange={e=>setValue2(e.target.value)} />
             
             {items}

        </div>
    )
}

export default Fetch;