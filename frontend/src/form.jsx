/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function _Form({handleAddTask}){
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/task/', { text: inputValue })
          .then(res => {
           handleAddTask(res.data.tasks)
            setInputValue('');
          })
          .catch(err => {
            console.log(err);
          });
      }
    return(
        <form className="text-left my-4 text-white" onSubmit={handleSubmit}>
            <label className="mr-5" htmlFor="task">Insert Task</label>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="rounded-md p-1 text-black" type="text" name="task" id="task" required />
            <input className="bg-cyan-500 border-0 rounded-md p-1 text-sm ml-4" type="submit" value="Add Task" />
        </form>
    )
}