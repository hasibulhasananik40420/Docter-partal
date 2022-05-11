import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate ,setTreatment}) => {
    const { name, slots } = treatment

     const handleBooking=(e)=>{
          e.preventDefault()
          const slot = e.target.slot.value 
          console.log(slot);
          setTreatment(null)
     }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center"> Booking For {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                             {slots.map(slot=> <option value={slot}> {slot}</option>)}  
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Enter Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs font-medium text-white" />
                    </form>
                    <div className="modal-action">
                        <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;