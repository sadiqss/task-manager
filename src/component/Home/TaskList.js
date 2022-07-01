import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(Context);
    return (
        <div>
            <ul className="list">
                {tasks.map(task => {
                    return <Task task={task}></Task>;
                })}
            </ul>
        </div>
    );
};

export default TaskList;