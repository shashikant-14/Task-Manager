import React, { useContext } from 'react'
import { appContext } from '../../context/Provider';
import Task from '../TaskItem/TaskItem';
import "./TaskList.css"

const TaskList = ({category}) => {
    const { tasks } = useContext(appContext);
    const filteredTask = tasks.filter((task)=>task.Category === category);
    return (
        <>
            <h4 className='task_category'>{category}</h4>
            <div className='tasklist'>
            {filteredTask.length > 0 && filteredTask.map((task) => {
                return (
                    <Task key={task.id} task={task} />
                )
            })}
            </div>
        </>
    )
}

export default TaskList
