import React, { createContext, useState } from 'react';
export const Context = createContext();
const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { task: "read the book", id: 1 },
        { task: "Wash the car", id: 2 },
        { task: "Write a letter", id: 3 }
    ])
    return <Context.Provider value={{ tasks }}>
        {props.children}
    </Context.Provider>

}

export default TaskListContextProvider;