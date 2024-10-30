import React from "react";
import Package1 from "./assests/images/london-image.jpg";
import Package2 from "./assests/images/newyork-image.png";
import Package3 from "./assests/images/paris-image.jpg";
import Package4 from "./assests/images/germany-image.jpg";
import Package5 from "./assests/images/mumbai-image.jpg";
import Package6 from "./assests/images/toronto-image.jpg";
import Package7 from "./assests/images/dubai-image.jpg";
import Package8 from "./assests/images/santorini-image.jpg";
import Package9 from "./assests/images/sydney-image.jpg";

function Package() {
    return (
        <>
            <section class="package my-3">
                <h2 class="text-center fw-bold">
                    Package <span class="spantext">Gallery</span>
                </h2>
                <div class="package-grid my-5">
                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package1}
                            class="card-img"
                            alt="package1"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">London, UK</h5>
                            <p class="card-text text-wrap">
                                Iconic Big Ben, River Thames views, and rich British history
                                await in London. Explore one of Europe’s most famous cities.
                            </p>

                            <div class="fs-5 fw-bold">$1200</div>
                            {/* Book Now Button */}
                            <div class="my-4 d-flex flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★☆ (4.5/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package2}
                            class="card-img"
                            alt="package2"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">New York, USA</h5>
                            <p class="card-text text-wrap">
                                The Empire State, Times Square, and Central Park – welcome to
                                New York City, the heart of America’s East Coast.
                            </p>
                            <div class="fs-5 fw-bold">$1200</div>
                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★★ (4.7/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card package-card border border-opacity-25">
                        <img src={Package3} class="card-img" alt="package3" />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Paris, France</h5>
                            <p class="card-text text-wrap">
                                Eiffel Tower, romantic streets, and French cuisine – explore
                                Paris, the City of Lights in Western Europe.
                            </p>
                            <div class="fs-5 fw-bold">$1300</div>

                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★★ (4.8/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package4}
                            class="card-img"
                            alt="package4"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Munich, Germany</h5>
                            <p class="card-text text-wrap">
                                Beer gardens, Bavarian culture, and stunning castles –
                                experience Munich, nestled in southern Germany.
                            </p>

                            <div class="fs-5 fw-bold">$1100</div>
                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★☆ (4.6/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package5}
                            class="card-img"
                            alt="package5"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Mumbai, India</h5>
                            <p class="card-text text-wrap">
                                Gateway of India, Bollywood, and bustling markets – dive into
                                the energy of Mumbai on India’s west coast.
                            </p>

                            <div class="fs-5 fw-bold">$800</div>

                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★☆ (4.4/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package6}
                            class="card-img"
                            alt="package6"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Toronto, Canada</h5>
                            <p class="card-text text-wrap">
                                CN Tower, diverse neighborhoods, and beautiful lakeside views –
                                discover Toronto, Canada’s cultural capital.
                            </p>

                            <div class="fs-5 fw-bold">$1400</div>

                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★☆ (4.6/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card package-card border border-opacity-25">
                        <img src={Package7} class="card-img" alt="package7" />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Dubai, UAE</h5>
                            <p class="card-text text-wrap">
                                Burj Khalifa, luxury malls, and desert adventures – explore
                                futuristic Dubai in the heart of the UAE.
                            </p>

                            <div class="fs-5 fw-bold">$1000</div>

                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★★ (4.9/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package8}
                            class="card-img"
                            alt="package8"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Santorini, Greece</h5>
                            <p class="card-text text-wrap">
                                Whitewashed houses, blue domes, and magical sunsets – Santorini,
                                a gem in the Aegean Sea, awaits.
                            </p>

                            <div class="fs-5 fw-bold">$1200</div>

                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★★ (4.9/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card package-card border border-opacity-25">
                        <img
                            src={Package9}
                            class="card-img"
                            alt="package9"
                        />
                        <div class="card-body">
                            <h5 class="card-title fw-semibold">Sydney, Australia</h5>
                            <p class="card-text text-wrap">
                                Sydney Opera House, Harbour Bridge, and golden beaches –
                                discover the coastal magic of Sydney, Australia.
                            </p>

                            <div class="fs-5 fw-bold">$1600</div>

                            {/* Book Now Button */}
                            <div class="my-4 d-flex pb-0 flex-column flex-md-row justify-content-between">
                                <button
                                    type="submit"
                                    class="btn btn-outline-dark order-1 order-md-0"
                                    id="submit"
                                >
                                    Book Now
                                </button>
                                <div class="fs-6 fw-light order-0 order-md-1">
                                    ★★★★★ (4.8/5) Ratings
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Package;
