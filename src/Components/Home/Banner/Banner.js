import React from 'react';
import Image1 from './Image1.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <main className="pb-5">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                {/* Buttons */}
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                {/* Carousel */}
                <div class="carousel-inner">
                    {/* Slide1 */}
                    <div class="carousel-item active">
                        <img src={Image1} class="d-block w-100 Slider_Image" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Be active in the school</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div class="carousel-item">
                        <img src={Image2} class="d-block w-100 Slider_Image" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Listening to the teacher is important</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div class="carousel-item">
                        <img src={Image3} class="d-block w-100 Slider_Image" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Refreshment is good for mind.</h2>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    );
};

export default Banner;