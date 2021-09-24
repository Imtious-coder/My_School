import React from 'react';
import './Teachers.css';
import T1 from '../../../Images/IMG_20210125_200350-02-removebg-preview.png';
import T2 from './download.jpg';
import T3 from './download.png';
import T4 from './images.jpg';
import T5 from './images (1).jpg';
import T6 from './images.png';

const Teachers = () => {
    return (
        <div>
            {/* Title */}
            <section className="container text-center mt-5 pt-5 mb-5 pb-3">
                <h3 id="Teachers">————Teachers————</h3>
            </section>
            {/* Teachers */}
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T2} alt="" />
                            <p className="Teachers--Name">Mr. Alan</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T3} alt="" />
                            <p className="Teachers--Name">Mr. Rian</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T4} alt="" />
                            <p className="Teachers--Name">Mrs. Nomito</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T5} alt="" />
                            <p className="Teachers--Name">Mr. Harry</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T6} alt="" />
                            <p className="Teachers--Name">Mrs. Suzen</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex flex-row-reverse mb-5">
                <div className="AllTeachers_Button">
                    All Teachers
                </div>
            </div>
        </div>
    );
};

export default Teachers;