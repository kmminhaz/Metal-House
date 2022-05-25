import React from 'react';
import OurCapabilities from './Capabilities/OurCapabilities';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';
import Companies from './Companies/Companies';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <br /> <br /> <br /> <br />
        <Tools></Tools>
        <br /> <br /> <br /> <br />
        <OurCapabilities></OurCapabilities>
        <br /> <br /> <br /> <br />
        <BusinessSummery></BusinessSummery>
        <br /> <br /> <br /> <br />
        <Reviews></Reviews>
        <br /> <br /> <br /> <br />
        <Companies></Companies>
        <br /> <br /> <br /> <br />
      </div>
    );
};

export default Home;