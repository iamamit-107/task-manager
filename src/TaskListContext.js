import React, { createContext, useState, useEffect } from "react";

export const TaskListContext = createContext();
const TaskListContextProvider = props => {
    //get the task data from local storage
    const initialTask = JSON.parse(localStorage.getItem("tasks")) || [];

    //declare task state
    const [tasks, setTasks] = useState(initialTask);

    //set task to localstorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    //add task to tasks state
    const addTask = title => {
        setTasks([
            ...tasks,
            { title, id: Math.floor(Math.random() * 100) + 4 }
        ]);
    };

    //clear the tasks state
    const clear = () => {
        setTasks([]);
    };

    //remove a task item
    const removeItem = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    //edit title state
    const [editTitle, setEditTitle] = useState(null);

    //find the editable task
    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        setEditTitle(item);
    };

    //update the edit task
    const editTask = (title, id) => {
        const newTask = tasks.map(task =>
            task.id === id ? { title, id } : task
        );
        setTasks(newTask);
    };

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                clear,
                removeItem,
                findItem,
                editTask,
                editTitle
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
