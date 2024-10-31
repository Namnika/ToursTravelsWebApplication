import React from "react";
import AboutUsImage from "./assests/images/aboutus-image.jpg";

function AboutUs() {
    return (
        <>
          <section className="aboutus py-5rem">
              <h2 className="text-center fw-bold">
                  About <span className="spantext">Us</span>
              </h2>

              <div className="container my-5">
                  <div className="row align-items-start g-5">
                      <div className="col-md-6">
                          <img
                              src={AboutUsImage}
                              alt="about-us"
                              className="img-fluid rounded"
                          />
                      </div>

                      <div className="col-md-6">
                          <h4 className="text-start fw-bold">How Travel Agency Work</h4>
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

                          <button type="submit" className="btn btn-dark" id="submit">
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
