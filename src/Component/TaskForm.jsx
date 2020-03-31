import React from "react";
import { useContext } from "react";
import { TaskListContext } from "../TaskListContext";
import { useState } from "react";
import { useEffect } from "react";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const { addTask, clear, editTitle, editTask } = useContext(TaskListContext);

    const handleChange = e => {
        setTitle(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (editTitle === null) {
            addTask(title);
            setTitle("");
        } else {
            editTask(title, editTitle.id);
            setTitle("");
        }
    };

    useEffect(() => {
        if (editTitle !== null) {
            setTitle(editTitle.title);
        } else {
            setTitle("");
        }
    }, [editTitle]);

    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={title}
                className="task-input"
                placeholder="Add Task..."
                required
            />
            <div className="buttons">
                {editTitle === null ? (
                    <button className="add-task-btn btn" type="submit">
                        Add Task
                    </button>
                ) : (
                    <button className="add-task-btn btn" type="submit">
                        Edit Task
                    </button>
                )}
                <button className="clear-btn btn" onClick={clear}>
                    Clear
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
