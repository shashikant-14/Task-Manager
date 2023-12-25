import React, { useContext, useRef } from 'react'
import { appContext } from '../../context/Provider';
import "./TaskForm.css"

const AddTask = () => {
    const {handleAddTask} = useContext(appContext);
    const inputRef = useRef();

    return (

        <form className='task_form' onSubmit={(e) => { e.preventDefault(); inputRef.current.value && handleAddTask(inputRef.current.value); inputRef.current.value = ''}}>
            <input ref={inputRef} type='text' placeholder='Enter new Task details' />
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default AddTask
