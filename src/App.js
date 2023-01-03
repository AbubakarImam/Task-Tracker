import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import { data } from "autoprefixer";
function App() {
  const [task,setTask] = useState([]);
  const [addTaskComp,setAddTaskComp] = useState(false);
  const url = 'http://localhost:5000/data';

  useEffect(()=>{
    fetchDatas();
  },[])

  // Fetch All Datas 

  const fetchDatas = async ()=> {
    const res = await fetch(url);
    const data = await res.json();
    setTask(data);
  }
  // Fetch A Data
  const fetchData = async (id)=> {
    const res = await fetch(`http://localhost:5000/data/${id}`);
    const data = await res.json();
    return data
  }

  //Remove a Task
  const removeTask = async (id)=> {
    await fetch(`http://localhost:5000/data/${id}`, {
      method: 'DELETE',
    } );
    setTask(task.filter((tasks)=>tasks.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id)=> {
    const dataToToggle = await fetchData(id);
    const upData = {...dataToToggle, reminder: !dataToToggle.reminder}
    const res = await fetch(`http://localhost:5000/data/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(upData)
    })
    const data = await res.json()
    setTask(task.map((tasks)=> tasks.id === id? {...tasks, reminder:data.reminder} : tasks))
  } 
  //Add New Task
  const addTask = async (tasks) => {
    const res = await fetch(`http://localhost:5000/data`, 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tasks)
    } );
    const data = await res.json()
    setTask([...task,data])
    // const id = Math.floor(Math.random * 100) + 1;
    // const newTask = {id, ...tasks};
    // setTask([...task,newTask])
  }
  // Toggle Add Task Component
  const toggleAddTask = () => {
    setAddTaskComp(!addTaskComp)
  }
  return (
      <div className=" max-w-xs md:max-w-4xl mx-auto my-8 border
       border-blue-500 rounded-lg overflow-auto p-8">

      <Header toggleAddTask={toggleAddTask} addTaskComp={addTaskComp}/>
      {addTaskComp ? <AddTask addTask={addTask} />: ''}
      {task.length > 0 ? <Tasks tasks={task} removeTask={removeTask} toggleReminder={toggleReminder}/>
      : <h1 className="font-bold">No Pending Task</h1>}
    </div>
  );
}

export default App;
