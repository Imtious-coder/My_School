import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="bg-secondary">
            <section className="container">
                <div className="row pt-5 pb-5">
                <div className="col-md-4 text-center">
                        <p>Principal</p>
                        <p>Notice</p>
                        <p>Teachers</p>
                        <p>email@example.com</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p>Class 6</p>
                        <p>Class 7</p>
                        <p>Class 8</p>
                        <p>Class 9</p>
                        <p>Class 10</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p>Shimpur High School, <br /> Shimpur Comilla.</p>
                    </div>
                </div>
            </section>
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center text-primary">
                    <p>Developed by <b>"Imtious Islam Midul"</b></p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Footer;