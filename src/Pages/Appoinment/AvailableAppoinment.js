import { format } from 'date-fns';
import React, {useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import BookingModal from './BookingModal';
import Service from './Service'
const AvailableAppoinment = ({selectedDate}) => {
     const [treatment, setTreatment] = useState(null)
      const formatedDate = format(selectedDate, 'PP')
       console.log(selectedDate);
       const{data:services , isLoading , refetch} = useQuery(['available',formatedDate] , ()=> fetch(`http://localhost:5000/available?selectedDate=${formatedDate}`)
       .then(res=> res.json()))

        if(isLoading){
            return <Spinner></Spinner>
        }

    
    return (
        <div>
            <h1 className='text-xl text-primary font-bold text-center'>Available Appoinment on {format(selectedDate, 'PP')}</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 mt-4'>
                 {
                     services?.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                 }
             </div>
              {treatment && <BookingModal refetch={refetch} treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;