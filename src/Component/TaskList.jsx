import React from "react";
import { useContext } from "react";
import { TaskListContext } from "../TaskListContext";
import Taks from "./Task";

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Taks task={task} key={task.id} />;
                    })}
                </ul>
            ) : (
                <div className="no-tasks">No Task</div>
            )}
        </div>
    );
};

export default TaskList;
