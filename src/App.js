import React from "react";
import "./App.css";
import TaskListContextProvider from "./TaskListContext";
import TaskList from "./Component/TaskList";
import TaskForm from "./Component/TaskForm";
import Header from "./Component/Header";

function App() {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
}

export default App;
