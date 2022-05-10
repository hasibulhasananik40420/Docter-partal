import React from 'react';

const Review = ({ rev }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, quis! Laboriosam minus, nulla sequi ullam repudiandae explicabo hic corporis error.</p>
                <div className="flex items-center ">
                   
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src={rev.img} alt=''/>
                        </div>
                    </div>
                    <div className='pl-4'>
                        <h4 className='xl font-medium'>{rev.name}</h4>
                        <h4 className='font-mono'>{rev.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;