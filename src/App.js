import { useState } from 'react';
import './App.css';

const  App = () =>{
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

const handlechange =(e) =>{
  setInput(e.target.value);
}
const addTag = (event) => {
  if (event.key === "Enter") {
    addTags()
  }
};
const addTags = () =>{
     setTags([...tags,input]);
     setInput('');
    
};


  return (
    <div className="App">

            <h1>Text Added task</h1>

        <form>
             
             <input type="text"  placeholder='Enter value' value={input} 
             onChange={handlechange}
              onKeyDown={addTag}
               />
                <button type="button" onClick={addTags}>
          Add
        </button>
             <ul>
                {tags.map((tag)=>(
                   <li>{tag}</li>
                ))
}
            </ul>

        </form>


    </div>
  );
}

export default App;
