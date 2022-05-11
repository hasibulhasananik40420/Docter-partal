import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service'
const AvailableAppoinment = ({selectedDate}) => {
     const [services, setServices] = useState([])
     const [treatment, setTreatment] = useState(null)
      useEffect(()=>{
          fetch('http://localhost:5000/service')
          .then(res=> res.json())
          .then(data =>{
              console.log(data)
              setServices(data)
          })
      },[])
    return (
        <div>
            <h1 className='text-xl text-primary font-bold text-center'>Available Appoinment on {format(selectedDate, 'PP')}</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 mt-4'>
                 {
                     services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                 }
             </div>
              {treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;