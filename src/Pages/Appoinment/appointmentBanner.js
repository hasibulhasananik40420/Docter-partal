import chair from '../../Assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const appointmentBanner = ({selectedDate,setDate}) => {
    return (
        <div className="hero min-h-screen ">
           
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="md:w-[450px] md:ml-24 rounded-lg shadow-2xl" alt='' />
                <div className='rounded-lg shadow-xl'>
                    <DayPicker  
                      mode="single"
                      selected={selectedDate}
                      onSelect={setDate}
                    />
                      
                </div>
                
            </div>
        </div>
    );
};

export default appointmentBanner;