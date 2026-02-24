import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <img src="/Leadcrm-Logo.svg" alt="" />

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
                        <button type="button" className="btn btn-primary px-4">
                            Get Your Free Account
                        </button>

                        <button type="button" className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2">
                            <img src="/login-icon.svg" alt="Login Icon" className="loginicon" />
                            Login
                        </button>
                    </div>

                </div>


            </div>
        </nav>
    );
}

export default Navbar;
