import "./App.css"
import{ useState } from "react"
// 没有写Task在外面的版本
function App() {

    const [addList,setAddList] = useState([])
    const [addTask, setAddTask] = useState("")

    const handleChange = (element) => {
        setAddTask(element.target.value)
    }
    const addNewList = () => {
        const task = {
          id: addList.length === 0 ? 1 : addList[addList.length - 1].id + 1,
          taskName: addTask,
          complete: false,
        };
        setAddList([...addList, task]);

    }
    const deleteTask = (id) => {
        
        const newTodoList = addList.filter((task) => {
            return task.id !== id
        })
        return setAddList(newTodoList);
    }

    const completeTask = (id) => {
        const completeNewTask = addList.map((task) => {
            if(id === task.id){
                return {...task,complete:true}
            } else{
                return task
            }
        })
        setAddList(completeNewTask);
    }



    return (
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addNewList}>Add List</button>
        </div>
        <div className="list">
            {addList.map((task)=>{
                return (
                  <div className="task" style={{backgroundColor:task.complete ? "green" : "white"}}>
                    <h1>{task.taskName}</h1>
                    <button onClick={
                        () =>completeTask(task.id)}
                        >
                    complete</button>
                    <button onClick={() => deleteTask(task.id)}>X</button>
                  </div>
                );
                 
            })}
        </div>
      </div>
    );

}


export default App;