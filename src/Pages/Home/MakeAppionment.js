import React from 'react';
import docter from '../../Assets/images/doctor.png'
import appointment from '../../Assets/images/appointment.png'
const MakeAppionment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center'>
             <div className='flex-1 hidden lg:block'>
                 <img className='mt-[-150px]' src={docter} alt="" />
             </div>

              <div className='flex-1 px-5'>
               <h1 className='text-xl text-[#19D3AE] font-bold'>Appointment</h1>
               <h1 className='text-3xl text-white font-medium mt-2 py-3'>Make an appointment Today</h1>
               <p className='text-white mt-2'>
               It is a long established fact that a reader will be distracted by the readable content of 
               a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here',
                making it look like readable English. Many desktop publishing packages and web page
               </p>
               <button className="btn btn-primary mt-2 text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>

             </div>
        </section>
    );
};

export default MakeAppionment;