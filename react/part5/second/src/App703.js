import "./App.css"
import Axios from "axios"
import {useState} from "react"

function App() {

    const [generatedExcuse, setGeneratedExcuse] = useState("");
    
    const getExcuse = (excuse) => {

        Axios.get(`https://excuser.herokuapp.com/va/excuse/${excuse}`).then(res => {
            setGeneratedExcuse(res.data[0].excuse);
        })
    }

    return (
      <div className="App">
        <div>
          <h1>Generate An Excuse</h1>
          <button
            onClick={() => {
              getExcuse("party");
            }}
          >
            Party
          </button>
          <button
            onClick={() => {
              getExcuse("family");
            }}
          >
            Family
          </button>
          <button
            onClick={() => {
              getExcuse("office");
            }}
          >
            Office
          </button>
        </div>
        <div>{generatedExcuse}</div>
      </div>
    );

}

export default App