import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import DantalCare from './DantalCare';
import Info from './Info';
import MakeAppionment from './MakeAppionment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <DantalCare></DantalCare>
           <MakeAppionment></MakeAppionment>
           <Testimonial></Testimonial>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;