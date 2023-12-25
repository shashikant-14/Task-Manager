import React, { createContext, useEffect, useState } from 'react'


export const appContext = createContext();

const Provider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const handleAddTask = (task) => {
        const newTasks = tasks.length > 0 ? [...tasks] : [];
        newTasks.push({ id: `Task ${tasks.length + 1}`, Name: task, Category: "Added" });
        setTasks(newTasks);
        localStorage.setItem("TASKS", JSON.stringify(newTasks));
    }

    const handleUpdateTask = (data) => {
        const updatedTasks = tasks.map((task) => {
           return  task.id === data.id ? data : task;
        })
        setTasks(updatedTasks);
        localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
    }

    const data = {
        tasks,
        handleAddTask,
        handleUpdateTask
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("TASKS"));
        data && data.length > 0 && setTasks(data);
    }, []);

    return (
        <appContext.Provider value={data}>
            {children}
        </appContext.Provider>
    )
}

export default Provider
