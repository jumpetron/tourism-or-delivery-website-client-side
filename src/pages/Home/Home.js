import React from 'react';
import Record from '../../Record/Record';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import OurStaff from '../OurStaff/OurStaff';



const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <AboutSection></AboutSection>
        <Booking></Booking>
        <OurStaff></OurStaff>
        <Record></Record>
      </div>
    );
};

export default Home;