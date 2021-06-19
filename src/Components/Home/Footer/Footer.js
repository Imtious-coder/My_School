import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="Footer Font1">
            <section className="container text-white">
                <div className="row pt-5 pb-5">
                    <div className="col-md-3 text-center mt-3">
                        <p>Principal</p>
                        <p>Notice</p>
                        <p>Teachers</p>
                        <p>Result</p>
                        <p>email@example.com</p>
                    </div>
                    <div className="col-md-3 text-center mt-3">
                        <p>Class 6</p>
                        <p>Class 7</p>
                        <p>Class 8</p>
                        <p>Class 9</p>
                        <p>Class 10</p>
                    </div>
                    <div className="col-md-3 text-center mt-3">
                        <p>Shimpur High School, <br /> <br /> Shimpur Comilla.</p>
                        <p>Location</p>
                        <p>Help</p>
                    </div>
                    <div className="col-md-3 text-center mt-3">
                        <p>Facebook</p>
                        <p>LinkdIn</p>
                        <p>Twitter</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center text-secondary">
                        <p>Developed by <b>"Imtious Islam Midul"</b></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;