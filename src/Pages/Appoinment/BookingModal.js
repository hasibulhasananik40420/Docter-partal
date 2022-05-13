import React from 'react';
import { format } from 'date-fns';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { data } from 'autoprefixer';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, selectedDate ,setTreatment}) => {
    const {_id, name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);


     const handleBooking=(e)=>{
          e.preventDefault()
          const slot = e.target.slot.value 
          const formatedDate = format(selectedDate, 'PP')
        
          const booking=  {
               treatmentId: _id,
               treatment: name,
               selectedDate:formatedDate,
               slot,
               patient: user.email,
               patientName:user?.displayName,
               phone:e.target.phone.value    
          }

            fetch('http://localhost:5000/booking', {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if(data.success){
                    toast(`Appoitnment is set ,${formatedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already hav an Appoitnment on ,${data.booking?.selectedDate} at ${data.booking?.slot}`)

                }
               
                setTreatment(null)
            })


        
     }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center"> Booking For {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                             {slots.map((slot ,index)=> <option key={index} value={slot}> {slot}</option>)}  
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Enter Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs font-medium text-white" />
                    </form>
                   
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;