import React from 'react';
import TaskListContextProvider from '../../context/Context';
import Calender from './Calender';
import Navbar from './Navbar';
import TaskList from './TaskList';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Calender></Calender>
            <TaskListContextProvider>
                <TaskList></TaskList>
            </TaskListContextProvider>
        </div>
    );
};

export default Home;