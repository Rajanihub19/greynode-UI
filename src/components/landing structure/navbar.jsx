import React from "react";
import './navbar.css'
const Navbar = () => {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid ms-5">
                    <img src='images\graynod_logo.png' class="navbar-brand" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ color: "#00D8C3" }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Business</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " href="#"  >
                                    people
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#" >Jobs</a>
                            </li>
                        </ul>
                        <div class="d-flex nav-item me-5 ">
                            <a class="nav-link text-white px-3" href="#" >Join Now</a>
                            <button className='px-3 button' type="submit"><i class="bi bi-person"></i>Sign in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar