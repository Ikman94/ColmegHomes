import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import property from '../Json/property.json';

export default function SingleProperty({ match }) {
    let id = match.params.id
    return (
        <div>
            {
                property.map(data => {
                    let datass = data._id
                    if (datass == id) {
                        return (
                            <>
                                {/* <!--/ Intro Single star /--> */}
                                <section class="intro-single">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12 col-lg-8">
                                                <div class="title-single-box">
                                                    <h1 class="title-single">{data.estate_name}</h1>
                                                    <span class="color-text-a">{data.location}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-lg-4">
                                                <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                                    <ol class="breadcrumb">
                                                        <li class="breadcrumb-item">
                                                            <Link to="/">Home</Link>
                                                        </li>
                                                        <li class="breadcrumb-item">
                                                            <Link to="/properties">Properties</Link>
                                                        </li>
                                                        <li class="breadcrumb-item active" aria-current="page">
                                                            {data.estate_name}
                                                        </li>
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!--/ Intro Single End /--> */}

                                {/* <!--/ Property Single Star /--> */}
                                <section class="property-single nav-arrow-b">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div className='owl-theme' >
                                                    <OwlCarousel items={1}
                                                        className="owl-theme"
                                                        loop
                                                        margin={8} >
                                                        <div className="property-carousel">
                                                            <div className="">
                                                                <div className="img-box-a">
                                                                    <img src={data.img.img1} alt="" className="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item-b">
                                                            <div className="card-box-a card-shadow">
                                                                <div className="img-box-a">
                                                                    <img src={data.img.img2} alt="" className="img-a img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item-b">
                                                            <div className="card-box-a card-shadow">
                                                                <div className="img-box-a">
                                                                    <img src={data.img.img3} alt="" className="img-a img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item-b">
                                                            <div className="card-box-a card-shadow">
                                                                <div className="img-box-a">
                                                                    <img src={data.img.img4} alt="" className="img-a img-fluid" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                                <div class="row justify-content-between">
                                                    <div class="col-md-5 col-lg-4">
                                                        <div class="property-price d-flex justify-content-center foo">
                                                            <div class="card-header-c d-flex">
                                                                <div class="card-box-ico">
                                                                    <span class="ion-money"></span>
                                                                </div>
                                                                <div class="card-title-c align-self-center">
                                                                    <h5 class="title-c">Colmeg</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="property-summary">
                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <div class="title-box-d section-t4">
                                                                        <h3 class="title-d">Quick Summary</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="summary-list">
                                                                <ul class="list">
                                                                    <li class="d-flex justify-content-between">
                                                                        <strong>Address:</strong>
                                                                        <span> {data.location}</span>
                                                                    </li>
                                                                    <li class="d-flex justify-content-between">
                                                                        <strong>City:</strong>
                                                                        <span> {data.city}</span>
                                                                    </li>
                                                                    <li class="d-flex justify-content-between">
                                                                        <strong>Property Type:</strong>
                                                                        <span>{data.property_type}</span>
                                                                    </li>
                                                                    <li class="d-flex justify-content-between">
                                                                        <strong>Status:</strong>
                                                                        <span>{data.status}</span>
                                                                    </li>
                                                                    <li class="d-flex justify-content-between">
                                                                        <strong>Area:</strong>
                                                                        <span>{data.area}</span>
                                                                    </li>
                                                                    <li class="d-flex justify-content-between">
                                                                        <strong>Bedrooms Each:</strong>
                                                                        <span>{data.amenities.bedrooms}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7 col-lg-7 section-md-t3">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="title-box-d">
                                                                    <h3 class="title-d">Description</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="property-description">
                                                            <p class="description color-text-a">
                                                                {data.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!--/ Property Single End /--> */}

                            </>

                        )
                    }
                })
            }
        </div>
    )
}
