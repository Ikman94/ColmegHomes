import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            {/* <!--/ footer Star /--> */}
            <section class="section-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <div class="widget-a">
                                <div class="w-header-a">
                                    <h3 class="w-title-a text-brand">Colmeg Mega Universal Limited</h3>
                                </div>
                                <div class="w-body-a">
                                    <p class="w-text-a color-text-a">
                                        A firm established to carry out real estate development, property construction. We are also involved in property management, acquisition and sales. A direct consequence of the need for functional, economic and valuable designs and constructions to fulfil clients needs.
                                    </p>
                                </div>
                                <div class="w-footer-a">
                                    <ul class="list-unstyled">
                                        <li class="color-a">
                                            <span class="color-text-a">Phone .</span> (+234) 7038070067</li>
                                        <li class="color-a">
                                            <span class="color-text-a">Phone .</span> (+234) 9036216909</li>
                                        <li class="color-a">
                                            <span class="color-text-a">Email .</span> colmegroyalhomes@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav class="nav-footer">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="#">About</Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="#">Property</Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="#">Blog</Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div class="socials-a">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <a href="https://web.facebook.com/colmeghomes/?ref=py_c&_rdc=1&_rdr" class="link-one">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/colmeghomes/?hl=en" class="link-one">
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="credits">
                                Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!--/ Footer End /--> */}
        </div>
    )
}
