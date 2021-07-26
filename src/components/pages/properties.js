import React from 'react';
import { Link } from 'react-router-dom';
import property from '../Json/property.json';

export default function Properties() {
  return (
    <div>
      {/* <!--/ Intro Single star /--> */}
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">Our Amazing Properties</h1>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Properties
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ Intro Single End /--> */}

      {/* <!--/ Property Grid Star /--> */}
      <section class="property-grid grid">
        <div class="container">
          <div class="row">

            {
              property.map(data => {
                return (
                  <>

                    <div class="col-md-4">
                      <div class="card-box-a card-shadow">
                        <div class="img-box-a">
                          <img src={data.img.img1} alt="" class="img-a img-fluid" />
                        </div>
                        <div class="card-overlay">
                          <div class="card-overlay-a-content">
                            <div class="card-header-a">
                              <h2 class="card-title-a">
                                <Link to={`/properties/${data._id}`}>{data.estate_name}</Link>
                              </h2>
                            </div>
                            <div class="card-body-a">
                              <div class="price-box d-flex">
                                <span class="price-a">{data.status}</span>
                              </div>
                              <Link to={`/properties/${data._id}`} class="link-a">Click here to view
                                <span class="ion-ios-arrow-forward"></span>
                              </Link>
                            </div>
                            <div class="card-footer-a">
                              <ul class="card-info d-flex justify-content-around">
                                <li>
                                  <h4 class="card-info-title">Area</h4>
                                  <span>{data.area}
                                    <sup>2</sup>
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
          </div>
        </div>
      </section>

      {/* <!--/ Property Grid End /--></div> */}
    </div>
  )
}
