import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Task = ({id,text,day,reminder, removeTask, toggleReminder}) => {
  return (
    <div className={`m-1 p-2 bg-gray-100 cursor-pointer ${reminder? 'border-l-4 border-green-500': ''}`} 
    onDoubleClick={()=>toggleReminder(id)}>
        <h3 className='text-lg flex justify-between'>
          {text}
          <FaTimes className='text-red-400 cursor-pointer' onClick={()=>removeTask(id)} />
          </h3>
        <p className='text-xs'>{day}</p>
    </div>
  )
}

export default Task