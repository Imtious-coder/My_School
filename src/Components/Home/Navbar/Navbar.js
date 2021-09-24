import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                {/* Name/Logo */}
                <a class="CRB ms-5" href="#">S<span className="CGB">chool</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto me-3">
                        {/* Navigations */}
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#">Notice</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#">Classes</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#">Result</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#">Teachers</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#">Events</a>
                        </li>
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#">About</a>
                        </li>
                        {/* Login/Logout button */}
                        <li class="nav-item me-4">
                            <a class="nav-link NavLinks" href="#" style={{ fontSize: "24px" }}><FontAwesomeIcon icon={faSignInAlt} /> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;