import React from "react";

function AboutUs() {
    return (
        <>
            <section class="aboutus py-5rem">
                <h2 class="text-center fw-bold">
                    About <span class="spantext">Us</span>
                </h2>

                <div class="container my-5">
                    <div class="row align-items-start g-5">
                        <div class="col-md-6">
                            <img
                                src="images/aboutus-image.jpg"
                                alt="about-us"
                                class="img-fluid rounded"
                            />
                        </div>

                        <div class="col-md-6">
                            <h4 class="text-start fw-bold">How Travel Agency Work</h4>
                            <p>
                                Founded with the goal of making travel accessible and
                                stress-free, Travels has been providing exceptional travel
                                experiences since 2024. We offer curated packages that include
                                everything from affordable hotels to local food tours,
                                transportation services, and exclusive travel deals. Our mission
                                is to ensure that travelers enjoy seamless trips with the help
                                of our expert safety guides and 24/7 customer support. Whether
                                you're looking for a budget-friendly vacation or a luxury
                                getaway, we provide tailored services to make your journey
                                unforgettable. Trust us to handle the details, so you can focus
                                on exploring the world.
                            </p>

                            <button type="submit" class="btn btn-dark" id="submit">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
