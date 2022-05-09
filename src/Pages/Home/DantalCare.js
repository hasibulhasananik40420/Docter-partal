import React from 'react';
import treatment from '../../Assets/images/treatment.png'
const DantalCare = () => {
    return (
        <div className="hero min-h-screen md:px-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="md:w-1/4 rounded-lg shadow-2xl" />
                <div className='md:ml-32'>
                    <h1 className="md:text-5xl font-bold">Exceptional Dental</h1>
                    <h1 className="md:text-5xl font-bold"> Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DantalCare;