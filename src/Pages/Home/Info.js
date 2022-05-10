import React from 'react';
import click from '../../Assets/icons/clock.svg'
import marker from '../../Assets/icons/marker.svg'
import phone from '../../Assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='md:flex md:flex-row md:gap-6 md:px-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl  bg-gradient-to-r from-secondary to-primary mt-6">
                <figure><img className='ml-4 md:w-[80px]' src={click} alt="Album"/></figure>
                <div className="card-body">
                    <h2  className="text-white text-xl font-medium">Opening Hours</h2>
                    <p  className="text-white">Click the button to listen on Spotiwhy app.</p>
                   
                </div>
            </div>
             <div className="card lg:card-side bg-[#3A4256] shadow-xl mt-6">
                <figure><img className='ml-4 ' src={marker} alt="Album"/></figure>
                <div className="card-body">
                    <h2  className="text-white text-xl font-medium">Visit our location</h2>
                    <p  className="text-white">Click the button to listen on Spotiwhy app.</p>
                   
                </div>
            </div>
             <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-neutral mt-6">
                <figure><img className='ml-4 ' src={phone} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="text-white text-xl font-medium">Contact us now</h2>
                    <p  className="text-white">Click the button to listen on Spotiwhy app.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Info;