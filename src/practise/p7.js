/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React, { useState } from "react";
import './reg.css';


const Numbers = () => {

  const [data, setData] = useState();
  const [num, setNum] = useState([]);
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);
  const [prime, setPrime] = useState([]);
  const handlechange = (e) => {
    setData(e.target.value)
  }

  const handleclick = (e) => {
    e.preventDefault();
    setNum([...num, data]);


    if (data % 2 === 0) {
      console.log('it is a even number')
      setEven([...even, data]);

    } else {
      console.log('it is a odd number')
      setOdd([...odd, data]);

    }

    let isPrime = true;
    if (data === 1) {
      console.log("1 is neither prime nor composite number.");
    }
    else if (data > 1) {
      for (let i = 2; i < data; i++) {
        if (data % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(`${data} is a prime number`);
        setPrime([...prime, data]);
        setData('')
      }
    }
    else {
      console.log('The number is not a prime number.');
    }
  }

  return (
    <div>
      <center>
        <form className="block">
          <h1>Number system</h1><hr></hr>
          <h2>Enter a Number :</h2>
          <input type='number' value={data} placeholder="Enter a Number" onChange={handlechange} />
          <button className="btn btn-primary m-2 w-2" onClick={handleclick}>Add</button>
        </form>
      </center>

      <div className="main">
        <div className="data">
          <h1>Even-Count :- {even.length}</h1>
          {even.map((ecount) => (
            <li>{ecount}</li>
          ))}
        </div>

        <div className="data">
          <h1>Odd-Count :- {odd.length}</h1>
          {odd.map((ocount) => (
            <li>{ocount}</li>
          ))}
        </div>

        <div className="data">
          <h1>prime-Count:-{prime.length}</h1>
          {prime.map((pcount) => (
            <li>{pcount}</li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Numbers;