import React from 'react';
import fluoride from '../../Assets/images/fluoride.png'
import cavity from '../../Assets/images/cavity.png'
import whitening from '../../Assets/images/whitening.png'
const ServicesCard = () => {
    return (
        <div className='md:flex md:flex-row md:gap-10'>

            <div className="card md:w-96  bg-base-100 shadow-2xl mb-3">
                <figure className="px-10 pt-10 ">
                    <img src={fluoride} alt="Shoes" className="rounded-xl md:w-1/4" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Fluoride Treatment</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card md:w-96 bg-base-100 shadow-2xl mb-3">
                <figure className="px-10 pt-10">
                    <img src={cavity} alt="Shoes" className="rounded-xl md:w-1/4" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cavity Filling</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card md:w-96 bg-base-100 shadow-2xl  mb-3">
                <figure className="px-10 pt-10">
                    <img src={whitening} alt="Shoes" className="rounded-xl md:w-1/4" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Whitening</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

        </div>
    );
};

export default ServicesCard;