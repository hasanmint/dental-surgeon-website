import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import CallToAction from './CallToAction/CallToAction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;