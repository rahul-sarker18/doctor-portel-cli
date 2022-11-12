import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navebar from '../Shared/Navebar';

const Main = () => {
    return (
        <div>
            <Navebar></Navebar>
            <div>
                <Outlet></Outlet>
            </div>

            <Footer/>
        </div>
    );
};

export default Main;