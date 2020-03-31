import React from "react";
import { useContext } from "react";
import { TaskListContext } from "../TaskListContext";

const Taks = ({ task }) => {
    const { removeItem, findItem } = useContext(TaskListContext);
    return (
        <li className="list-item">
            <span> {task.title} </span>
            <div>
                <button
                    onClick={() => removeItem(task.id)}
                    className="btn-delete task-btn"
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button
                    className="btn-edit task-btn"
                    onClick={() => findItem(task.id)}
                >
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    );
};

export default Taks;
