import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const [number, setNumber] = useState(1);
  const Increment = () => {
    return (setNumber(number + 1));
  }

  const Decrement = () => {
    console.log("hello")
    return (
      (number > 0) ? setNumber(number - 1) : setNumber(0)
    );
  }

  return (
    <>
      <div className="body">
        <div className="MainContainer">
          <br></br>
          <h1>{number}</h1>
          <div className="ButtonGroup">
            <button type="button" className="btn btn-primary"onClick={() => { Increment() }}>Increment</button>
            <button type="button" className="btn btn-primary"onClick={() => { Decrement() }}>Decrement</button>
          </div>
        </div>

      </div>
    </>
  );
}
export default App;