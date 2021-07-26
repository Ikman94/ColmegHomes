import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import property from '../Json/property.json';

export default function Property() {
    return (
        <div>
            {/* <!--/ Property Star /--> */}
            <section className="section-property section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Latest Properties</h2>
                                </div>
                                <div className="title-link">
                                    <Link to="/properties">All Property
                                        <span className="ion-ios-arrow-forward"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ Property Grid Start /--> */}
                    <div>
                        <div className='owl-theme' >
                            <OwlCarousel items={3}
                                className="owl-theme"
                                loop
                                margin={8} >

                                {
                                    property.slice(0, 4).map(data => {
                                        return (
                                            <>

                                                <div className="carousel-item-b">
                                                    <div className="card-box-a card-shadow">
                                                        <div className="img-box-a">
                                                            <img src={data.img.img1} alt="" className="img-a img-fluid" />
                                                        </div>
                                                        <div className="card-overlay">
                                                            <div className="card-overlay-a-content">
                                                                <div className="card-header-a">
                                                                    <h2 className="card-title-a">
                                                                        <Link to={`/properties/${data._id}`} >{data.estate_name}</Link>
                                                                    </h2>
                                                                </div>
                                                                <div className="card-body-a">
                                                                    <div className="price-box d-flex">
                                                                        <span className="price-a">{data.status}</span>
                                                                    </div>
                                                                    <Link to={`/properties/${data._id}`} className="link-a">Click here to view
                                                                        <span className="ion-ios-arrow-forward"></span>
                                                                    </Link>
                                                                </div>
                                                                <div className="card-footer-a">
                                                                    <ul className="card-info d-flex justify-content-around">
                                                                        <li>
                                                                            <h4 class="card-info-title">Area</h4>
                                                                            <span>{data.area}
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <h4 class="card-info-title">Units</h4>
                                                                            <span>{data.units}</span>
                                                                        </li>
                                                                        <li>
                                                                            <h4 class="card-info-title">Types</h4>
                                                                            <span>{data.property_type}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>

                                        )
                                    })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ Property End /--> */}

        </div>
    )
}
