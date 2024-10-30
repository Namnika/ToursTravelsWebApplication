import React from "react";

function Header() {
    return (
        <>
            <header className="px-5 py-5">
                {/* navigation */}
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container-fluid">
                        {/* navbar logo  */}
                        <a href="#logo">
                            <img
                                src="images/brand-logo.png"
                                width="100"
                                height="30"
                                alt="logo"
                            />
                        </a>

                        {/* navigation menu using Bootstrap */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="navigation collapse navbar-collapse bg-transparent"
                            id="navbarNav"
                        >
                            <ul className="fw-normal px-0 mb-0 navbar-nav">
                                <li>Home</li>
                                <li>Book</li>
                                <li className="hovermenu">
                                    <span>Packages</span>
                                    <div className="hovermenuitem">
                                        <p>United State</p>
                                        <p>India</p>
                                        <p>France</p>
                                        <p>Germany</p>
                                    </div>
                                </li>

                                <li>Services</li>
                                <li>Gallery</li>
                                <li>About</li>
                            </ul>
                            <div className="d-flex d-lg-none" style={{ height: 200 }}>
                                <div className="vr"></div>
                            </div>

                            <div className="d-flex justify-content-between align-items-end gap-3">
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginmodal"
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registermodal"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <section className="welcomesection text-center">
                    <div className="welcome-content my-2">
                        <h1>Welcome to Travels</h1>
                        <h3>
                            Visit <span id="placename"></span>
                        </h3>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-dark">Book Now</button>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Header;
