import React from 'react';
import Team from '../team/team';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            {/* <!--/ Intro Single star /--> */}
            <section class="intro-single">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single">We Do Great Design For Creative Folks</h1>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        About
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ Intro Single End /--> */}

            {/* <!--/ About Star /--> */}
            <section class="section-about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="about-img-box">
                                <img src="img/slide2.jpeg" alt="" class="img-fluid" />
                            </div>
                            <div class="sinse-box">
                                <h3 class="sinse-title text-white">Colmeg Homes
                                    <span></span>
                                    <br /> Since 2010</h3>
                                <p>Real Estate</p>
                            </div>
                        </div>
                        <div class="col-md-12 section-t8">
                            <div class="row">
                                <div class="col-md-6 col-lg-5">
                                    <img src="img/colmeg.jpeg" alt="" class="img-fluid" />
                                </div>
                                <div class="col-lg-2  d-none d-lg-block">
                                    <div class="title-vertical d-flex justify-content-start">
                                        <span>COLOSIAN MEGA UNIVERSAL LIMITED</span>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-5 section-md-t3">
                                    <div class="title-box-d">
                                        <h3 class="title-d">OUR
                                            <span class="color-d">HISTORY</span></h3>
                                    </div>
                                    <p class="color-text-a">
                                        The firm established for the purpose of carrying out construction of building and Sales of properties.
                                        The company is involved in property management, acquisition and sales. Its involvement in the industry is a direct consequence of the need for functional, economic and valuable design to fulfill the client’s requirement.
                                    </p>
                                    <p class="color-text-a">
                                        COLOSIAN MEGA UNIVERSAL LIMITED uses the services of highly qualified, technical and experienced manpower to meet the client’s expectations.
                                    </p>

                                    <p class="color-text-a">
                                        COLOSIAN MEGA UNIVERSAL LIMITED: a young diversified company, poised to provide effective and efficient service in the area of real estate.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 section-t8">
                            <div class="row">
                                <div class="col-md-6 col-lg-5 section-md-t3">
                                    <div class="title-box-d">
                                        <h3 class="title-d">Our Mission
                                            <span class="color-d"> &</span> Vision
                                        </h3>
                                    </div>
                                    <h3 class="title-d">Our Mission.</h3>
                                    <p class="color-text-a">
                                        We seek to be leader amongst our peers, to attain and maintain our leadership position. We always strive to achieve client’s desires, superior and quality job return patronage and remain a sociably responsible
                                    </p>
                                    <p class="color-text-a">
                                        These will be achieved by assembling and retaining a core of highly trained technical and motivated professionals that will facilitate patronage in selected high growth sectors of construction industry.
                                    </p>

                                    <h3 class="title-d">Our Objective.</h3>
                                    <p class="color-text-a">
                                        The company was established by a young professional to provide quality service at a competitive price in the federal capital territory and the country as a whole.
                                    </p>
                                </div>
                                <div class="col-md-6 col-lg-5">
                                    <img src="img/mission.jpeg" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!--/ About End /--> */}

            {/* <!--/ Team /--> */}

            <Team />

            {/* <!--/ Team End /--> */}
        </div>
    )
}
