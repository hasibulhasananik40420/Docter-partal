import React from 'react';

const service = ({service ,setTreatment}) => {
   const {name, slots} = service
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary">{name}</h2>
           <p>
               {slots.length>0 ? <span>{slots[0]}</span> : <span className='text-red-400'>No Slots Available</span>}
           </p>
          <p> {slots.length} {slots.length>1 ? 'spaces' : 'space'} Available</p>
          <div className="card-actions justify-center">
            <label onClick={()=>setTreatment(service)} disabled={slots.length===0} htmlFor="my-modal-6" className="btn btn-primary font-medium text-white">Book Appoinment</label>
          </div>
        </div>
      </div>
    );
};

export default service;