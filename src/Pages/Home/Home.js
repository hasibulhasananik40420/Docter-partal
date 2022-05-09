import React from 'react';
import Banner from './Banner';
import DantalCare from './DantalCare';
import Info from './Info';
import MakeAppionment from './MakeAppionment';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <DantalCare></DantalCare>
           <MakeAppionment></MakeAppionment>
        </div>
    );
};

export default Home;