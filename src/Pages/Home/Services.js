import React from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    return (
        <div className='mt-16 px-12'>
            <h1 className='text-[#19D3AE] font-medium text-center'>OUR SERVICES</h1>
            <h1 className='md:text-4xl mb-12 font-medium text-center'>Services We Provide</h1>

             <ServicesCard></ServicesCard>
        </div>
    );
};

export default Services;