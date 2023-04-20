import "./App.css";
import { useState } from "react";

function App() {
  /* 2  */
  // const [inputText, setText] = useState("")
  // const setPage =(event) =>{
  //   setText(event.target.value);
  // }
  /* 3  */
  // const [showText, setShowText] = useState(true)
  // const toggleText = () =>{
  //   setShowText(!showText)
  // }
  /* 4  */
  // const [showColor, setShowColor] = useState("black");
  /* exercise */

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <input type="text" onChange={setPage} />
      {inputText} */}

      {/* <button onClick={toggleText}>Show/Hide</button>
      {showText && <h1>Hi My Name Is Claire!</h1>} */}

      {/* <button onClick={() => {
        setShowColor(showColor === "black" ? "red" : "black");
      }}>Show/Hide</button>
      <h1 style={{ color: showColor }}>Hi My Name Is Claire!</h1> */}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero
      </button>
      {count}
    </div>
  );
}

export default App;
