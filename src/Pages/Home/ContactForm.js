import React from 'react';
import appointment from '../../Assets/images/appointment.png'
const ContactForm = () => {
    return (
        <div style={{
            background:`url(${appointment})`
        }} className=''>
            
           <div>
              <div className='text-center pt-16 mb-10'>
              <h1 className='text-primary text-xl font-bold'>Contact Us </h1>
               <h1 className='md:text-3xl font-semibold text-white'>Stay connected with us</h1>
              </div>
               <div className='text-center'>
                  
                    <div><input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-3" /></div>
                    <div><input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mb-3" /></div>
                   <div><textarea className="textarea textarea-bordered md:w-[320px] mb-3" placeholder='Your Message'></textarea></div>
                   <button className='mb-10 py-2 px-8 bg-primary rounded-md font-medium text-white'>Submit</button>
               </div>
           </div>

        </div>
    );
};

export default ContactForm;