import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Property from '../property/property';
import Team from '../team/team';
import Image from '../img/slide3.jpg'

export default function Home() {
    return (
        <div>
            {/* <!--/ Carousel Star /--> */}
            <div className='owl-theme' >
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop
                    margin={8} >
                    <div class="intro intro-carousel">
                        <div id="carousel" class="">
                            <div class="carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(${Image})` }}>
                                <div class="overlay overlay-a"></div>
                                <div class="intro-content display-table">
                                    <div class="table-cell">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <div class="intro-body">
                                                        <h1 class="intro-title mb-1">
                                                            <span class="color-b">COLMEG HOMES </span> </h1>
                                                        <p class="intro-subtitle intro-price">
                                                            <span class="text-white">An investment in real estate can also diversify your portfolio. it is not only a safe financial investment, it is also an investment that can provide years of fun, happiness and priceless memories that will last a lifetime.</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(${Image})` }}>
                                <div class="overlay overlay-a"></div>
                                <div class="intro-content display-table">
                                    <div class="table-cell">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <div class="intro-body">
                                                        <h1 class="intro-title mb-1">
                                                            <span class="color-c">COLMEG HOMES </span> </h1>
                                                        <p class="intro-subtitle intro-price">
                                                            <Link to="#"><span class="text-white">An investment in real estate can also diversify your portfolio. it is not only a safe financial investment, it is also an investment that can provide years of fun, happiness and priceless memories that will last a lifetime.</span></Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(${Image})` }}>
                                <div class="overlay overlay-a"></div>
                                <div class="intro-content display-table">
                                    <div class="table-cell">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <div class="intro-body">
                                                        <h1 class="intro-title mb-1">
                                                            <span class="color-c">COLMEG HOMES </span> </h1>
                                                        <p class="intro-subtitle intro-price">
                                                            <Link to="#"><span class="text-white">An investment in real estate can also diversify your portfolio. it is not only a safe financial investment, it is also an investment that can provide years of fun, happiness and priceless memories that will last a lifetime.</span></Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(${Image})` }}>
                                <div class="overlay overlay-a"></div>
                                <div class="intro-content display-table">
                                    <div class="table-cell">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <div class="intro-body">
                                                        <h1 class="intro-title mb-1">
                                                            <span class="color-c">COLMEG HOMES </span> </h1>
                                                        <p class="intro-subtitle intro-price">
                                                            <Link to="#"><span class="text-white">An investment in real estate can also diversify your portfolio. it is not only a safe financial investment, it is also an investment that can provide years of fun, happiness and priceless memories that will last a lifetime.</span></Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            {/* <!--/ Carousel end /--> */}

            {/* <!--/ Services Star /--> */}
            <section class="section-services section-t8">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title-wrap d-flex justify-content-between">
                                <div class="title-box">
                                    <h2 class="title-a">About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card-box-c foo">
                                <div class="card-header-c d-flex">
                                    <div class="card-box-ico">
                                        <span class="fa fa"></span>
                                    </div>
                                    <div class="card-title-c align-self-center">
                                        <h2 class="title-c">Estate Development</h2>
                                    </div>
                                </div>
                                <div class="card-body-c">
                                    <p class="content-c">
                                        We provide a large selection of exclusive properties, relying on trusted professionals in luxury real estate we will open your eyes to the most enchanting properties: luxury homes, prestigious estates, classic residences, unique mansions and country homes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-box-c foo">
                                <div class="card-header-c d-flex">
                                    <div class="card-box-ico">
                                        <span class="fa fa"></span>
                                    </div>
                                    <div class="card-title-c align-self-center">
                                        <h2 class="title-c">Project Management</h2>
                                    </div>
                                </div>
                                <div class="card-body-c">
                                    <p class="content-c">
                                        We achieve specific goals and meet specific success criteria at the specified time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-box-c foo">
                                <div class="card-header-c d-flex">
                                    <div class="card-box-ico">
                                        <span class="fa fa"></span>
                                    </div>
                                    <div class="card-title-c align-self-center">
                                        <h2 class="title-c">Innovative Ideas</h2>
                                    </div>
                                </div>
                                <div class="card-body-c">
                                    <p class="content-c">
                                        Our creativity in concepts and designs. Approach the future that is already here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <Link to="/about" class="link-c link-icon">Read more
                        <span class="ion-ios-arrow-forward"></span>
                    </Link>
                </div>
            </section>
            {/* <!--/ Services End /--> */}

            {/* <!--/ Property Star /--> */}
            <Property />
            {/* <!--/ Property End /--> */}

            {/* <!--/ Team /--> */}

            <Team />

            {/* <!--/ Team End /--> */}
        </div>
    )
}
