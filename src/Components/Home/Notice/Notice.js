import React from 'react';
import './Notice.css';
import N1 from '../../../Images/Noticepng'
import N2 from '../../../Images/Notice-2jfif.jfif'
import N3 from '../../../Images/Notice3png.png'

const Notice = () => {
    return (
        <section>
            {/* Title */}
            <div className="ms-4">
                <p className="Notice">Notice</p>
            </div>
            {/* Cards */}
            <div className="container">
                <div className="row ms-4">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-3 d-flex justify-content-center">
                        <div class="card" style={{ width: "18rem" }}>
                            {/* Image */}
                            <img style={{ height: "200px" }} src={N1} class="card-img-top" alt="..." />
                            {/* Details */}
                            <div class="card-body">
                                <h5 class="card-title">Online Class</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="Notice_Details_Button">Details</a>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-4 mb-3 d-flex justify-content-center">
                        <div class="card" style={{ width: "18rem" }}>
                            {/* Image */}
                            <img style={{ height: "200px" }} src={N2} class="card-img-top" alt="..." />
                            {/* Details */}
                            <div class="card-body">
                                <h5 class="card-title">Class Test Result</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="Notice_Details_Button">Details</a>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4 mb-3 d-flex justify-content-center">
                        <div class="card" style={{ width: "18rem" }}>
                            {/* Image */}
                            <img style={{ height: "200px" }} src={N3} class="card-img-top" alt="..." />
                            {/* Details */}
                            <div class="card-body">
                                <h5 class="card-title">Best Students List</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="Notice_Details_Button">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="MoreNotice_Button">More notice</button>
        </section>
    );
};

export default Notice;