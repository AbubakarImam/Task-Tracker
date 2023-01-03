import React from 'react'

const Header = ({toggleAddTask,addTaskComp}) => {
  return (
    <div className='flex flex-row justify-between items-center mb-4'>
        <h1 className="font-black">Task Tracker</h1>
        <div className='space-x-2'>
          <label className='font-sm' htmlFor="Add Task">{addTaskComp? '': 'Add Task'}</label>
          <button className={`text-white ${addTaskComp? 'bg-red-500 hover:bg-red-400':'bg-green-500 hover:bg-green-400'} hover:shadow cursor-pointer rounded p-1 px-2`} 
        onClick={toggleAddTask}>
            {addTaskComp? 'Close': 'Add'}
        </button>
        </div>
    </div>
  )
}

export default Header