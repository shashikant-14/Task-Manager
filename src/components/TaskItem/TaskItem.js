import React, { useContext, useRef, useState } from 'react'
import { appContext } from '../../context/Provider';
import "./TaskItem.css"

const Task = ({ task }) => {
    const [isEditable, setIsEditable] = useState(false);
    const { handleUpdateTask } = useContext(appContext);
    const inputRef = useRef();
    return (
        <div className='task_container'>
            <span>{task.Name}</span>
            <div>
                {isEditable &&
                    <select ref={inputRef} value={task.Category} onChange={() => { let updatedTask = { ...task, Category: inputRef.current.value }; setIsEditable(!isEditable); handleUpdateTask(updatedTask); }}>
                        <option value="Added">Added</option>
                        <option value="Started">Started</option>
                        <option value="Completed">Completed</option>
                    </select>
                }<button onClick={() => { setIsEditable(!isEditable) }}>E</button>
            </div>
        </div>
    )
}

export default Task
