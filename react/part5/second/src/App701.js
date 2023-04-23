import "./App.css"
import Axios from "axios"
import {useState, useEffect} from "react"

function App() {
    // fetch("https://catfact.ninja/fact").then(res => res.json()).then((data) => {
    //     console.log(data);
    // })
    const [catFact,setCatFate] =useState("")

    const fetchCateFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
          setCatFate(res.data.fact);
        });
    }

    useEffect(()=>{fetchCateFact()},[]);

    return (
      <div className="App">
        <button onClick={fetchCateFact}>Generate Cat Fact</button>
        <p>{catFact} </p>
      </div>
    );
}

export default App