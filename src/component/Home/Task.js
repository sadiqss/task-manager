import React from 'react';

const Task = ({ task }) => {
    return (
        <li className="list-item">
            <span>{task.task}</span>
            <div>
                <button className="btn-delete btn-task">

                </button>
            </div>
        </li>
    );
};

export default Task;