import React from 'react';
import Images from '../Images/Images';
import Navbar from '../Navbar/Navbar';
import Notice from '../Notice/Notice';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Images></Images>
            <Notice></Notice>
        </div>
    );
};

export default Home;