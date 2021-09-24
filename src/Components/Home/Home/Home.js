import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Notice from '../Notice/Notice';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Notice />
            <Teachers />
            <Footer />
        </div>
    );
};

export default Home;