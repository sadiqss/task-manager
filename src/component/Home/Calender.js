import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className=''>
            <Calendar onChange={onChange} value={value} />
            {value.toString()}
        </div>
    );
};

export default Calender;