import React from 'react';
import Footer from '../Footer/Footer';
import Images from '../Images/Images';
import Navbar from '../Navbar/Navbar';
import Notice from '../Notice/Notice';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Images></Images>
            <Notice></Notice>
            <Teachers></Teachers>
            <Footer />
        </div>
    );
};

export default Home;