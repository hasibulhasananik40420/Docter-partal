import React from 'react';
import quote from '../../Assets/icons/quote.svg'
import people1 from '../../Assets/images/people1.png'
import people2 from '../../Assets/images/people2.png'
import people3 from '../../Assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name:'Winson Herry',
            review:'',
            location:'Bangladesh',
            img:people1
        },
        {
            _id: 2,
            name:'Winson Herry',
            review:'',
            location:'Bangladesh',
            img:people2
        },
        {
            _id: 3,
            name:'Winson Herry',
            review:'',
            location:'Bangladesh',
            img:people3
        }
    ]
    return (
        <section className='my-28 md:px-12'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='texy-xl font-bold text-[#65EAFB]'>Testimonial</h3>
                    <h3 className='md:text-3xl font-medium'>What Our Patients Says</h3>
                </div>
                <div>
                   <img className='w-[192px] h-[156px]' src={quote} alt="" />
                </div>
            </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                 reviews.map(rev=> <Review key={rev._id} rev={rev}></Review>)
             }
            </div>
        </section>
    );
};

export default Testimonial;