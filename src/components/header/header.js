import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            {/* <!--/ Nav Star /--> */}
            <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div class="container">
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand header-name" to="/"><img src="img/colmeg.jpeg"/> Colosian Mega Universal Limited</Link>
                    <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link " to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/properties">Property</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!--/ Nav End /--> */}
        </div>
    )
}
