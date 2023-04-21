import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [addTask, setNewTask] = useState("");
  

  const handleChange = (element) => {
    setNewTask(element.target.value);
  };
  const addNewList = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: addTask,
      completed:false
    };
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newTodoList);
  };
  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id) {
          return {...task, completed:true}
        }  else {
          return task
        }
      }))
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addNewList}>Add List</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
