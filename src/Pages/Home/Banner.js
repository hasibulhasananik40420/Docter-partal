import React from 'react';
import chair from '../../Assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen md:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="md:w-2/4 rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="md:text-5xl md:font-bold">Your New Smile Start Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;