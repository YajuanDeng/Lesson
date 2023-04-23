import "./App.css";
import { useState } from "react";
import Axios from "axios"


function App() {

  const [name, setName] = useState("")  
  const[getMessage,setGetMessage] = useState({})

  const getName =(event)=>{
    setName(event.target.value)
  }
  const getInformation = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then(res => {
        setGetMessage(res.data)
    })


  }


  return (
    <div className="App">
      <div>
        <input onChange={getName} />
        <button onClick={getInformation}>Get Age</button>
      </div>
      <div>
        <h1>Name:{getMessage.name}</h1>
        <h1>Predicted Age:{getMessage.age}</h1>
        <h1>Count:{getMessage.count}</h1>
      </div>
    </div>
  );
}

export default App;
