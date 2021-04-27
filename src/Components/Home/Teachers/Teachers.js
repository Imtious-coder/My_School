import React from 'react';
import './Teachers.css';
import T1 from '../../../Images/IMG_20210125_200350-02-removebg-preview.png';

const Teachers = () => {
    return (
        <div>
            <section className="container text-center mt-5 pt-5 mb-5 pb-3">
                <h3 id="Teachers">————Teachers————</h3>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Teachers--Card mb-5">
                            <img className="Teachers--Image" src={T1} alt="" />
                            <p className="Teachers--Name">Mrs. Lina</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex flex-row-reverse mb-5">
                <div className="btn btn-primary">
                    All T E A C H E R S
                </div>
            </div>
        </div>
    );
};

export default Teachers;