import React, { useState } from 'react';
import AppointmentBanner from './appointmentBanner'
import AvailableAppoinment from './AvailableAppoinment';
const Appoinment = () => {
         const [date ,setDate] = useState(new Date())
         const selectedDate = date ? date:new Date()

    return (
        <div>
         <AppointmentBanner selectedDate={selectedDate} setDate={setDate}></AppointmentBanner>
         
         <AvailableAppoinment selectedDate={selectedDate}></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;