import React, { useState} from 'react'

const AddTask = ({addTask}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please input a task')
            return
        }

            addTask({text,day,reminder})
            setText('')
            setDay('')
            setReminder(false)

    }
  return (
    <div>
         <form action="submit" className="my-10" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">Task</p>
                    <input type="text" value={text} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter Task"
                    onChange={(e)=> setText(e.target.value)}/>
                </label>
                <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Day & Time</p>
                    <input type="text" value={day} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter the Day and Time"
                    onChange={(e)=> setDay(e.target.value)}/>
                </label>
                <div className="flex flex-row justify-between">
                        <span>Reminder</span> 
                        <input type="checkbox" value={reminder} className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                        onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                </div>
                <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                      <span>Submit</span>
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddTask