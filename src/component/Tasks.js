import React from 'react'
import Task from './Task';

const Tasks = ({tasks,removeTask,toggleReminder}) => {
  return (
    <div>
        {tasks.map((task)=>{
            return <Task key={task.id} {...task} 
            removeTask={removeTask} toggleReminder={toggleReminder}/>
        })}
    </div>
  )
}

export default Tasks