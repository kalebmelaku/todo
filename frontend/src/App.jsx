/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import _Form from './Form';
import Task from './tasks';
function App() {
  const [tasks, setTask] = useState([])
  const [sortedGoals, setSortedGoals] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/task/')
    .then(res =>{
      setTask(res.data.tasks)
    })
    .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    setSortedGoals([...tasks].sort((a, b) => a.text.localeCompare(b.text)));
  }, [tasks]);
  const handleAddTask = (task) =>{
    setTask([...tasks, task])
  }
  return (
    <>
    <div className="text-white flex bg-gray-800 justify-center items-center h-screen">
      <div className="w-3/4 h-1/2 bg-gray-500 rounded-md p-4 text-center">
        <div className="">
          <h2 className="text-xl" >Task List</h2>
          <_Form handleAddTask={handleAddTask}/>
          {sortedGoals.map(task => (
        <div key={task._id}>
          <Task task={{text: task.text, id: task._id}} />
        </div>
      ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
