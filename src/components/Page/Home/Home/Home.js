import React from 'react';
import Baner from '../Baner/Baner';
import MackApporment from '../MackAppoirenment/MackApporment';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Baner/>
            <Services/>
            <MackApporment/>
            <Review/>
        </div>
    );
};

export default Home;