import React from "react";

function Services() {
    return (
        <>
            <section class="services">
                <h2 class="text-center fw-bold">
                    Our <span class="spantext">Services</span>
                </h2>
                <div class="services-grid my-5">
                    <div class="card service-card bg-white bg-opacity-75 border border-0 text-center">
                        <div class="card-body">
                            <i class="fa-solid fa-hand-holding-dollar fa-3x my-4 text-muted"></i>
                            <h5 class="card-title fw-semibold">Affordable Hotels</h5>
                            <p class="card-text text-wrap text-muted">
                                Enjoy comfortable stays at budget-friendly hotels that cater to
                                all your needs.
                            </p>
                        </div>
                    </div>
                    <div class="card service-card bg-white bg-opacity-75 border border-0 text-center">
                        <div class="card-body">
                            <i class="fa-solid fa-utensils fa-3x my-4 text-muted"></i>
                            <h5 class="card-title fw-semibold">Food & Drinks</h5>
                            <p class="card-text text-wrap text-muted">
                                Experience local cuisines with curated dining options, including
                                traditional meals and street food tours.
                            </p>
                        </div>
                    </div>
                    <div class="card service-card bg-white bg-opacity-75 border border-0 text-center">
                        <div class="card-body">
                            <i class="fa-solid fa-shield-halved fa-3x my-4 text-muted"></i>
                            <h5 class="card-title fw-semibold">Safety Guide</h5>
                            <p class="card-text text-wrap text-muted">
                                Travel with peace of mind with our trained safety guides who
                                provide insights and assistance during your adventures.
                            </p>
                        </div>
                    </div>
                    <div class="card service-card bg-white bg-opacity-75 border border-0 text-center">
                        <div class="card-body">
                            <i class="fa-solid fa-taxi fa-3x my-4 text-muted"></i>
                            <h5 class="card-title fw-semibold">Transportation Services</h5>
                            <p class="card-text text-wrap text-muted">
                                Hassle-free transfers and transportation options, including
                                airport pickups, car rentals, and guided tours.
                            </p>
                        </div>
                    </div>
                    <div class="card service-card bg-white bg-opacity-75 border border-0 text-center">
                        <div class="card-body">
                            <i class="fa-solid fa-sack-dollar fa-3x my-4 text-muted"></i>
                            <h5 class="card-title fw-semibold">Exclusive Travel Deals</h5>
                            <p class="card-text text-wrap text-muted">
                                Unlock special discounts and offers on flights, hotels, and
                                activities, giving you the best value for your trip.
                            </p>
                        </div>
                    </div>
                    <div class="card service-card bg-white bg-opacity-75 border border-0 text-center">
                        <div class="card-body">
                            <i class="fa-solid fa-headset fa-3x my-4 text-muted"></i>
                            <h5 class="card-title fw-semibold">24/7 Customer Support</h5>
                            <p class="card-text text-wrap text-muted">
                                Reach out to our dedicated customer support team anytime for
                                assistance, inquiries, or changes to your bookings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
