import React, { useState } from "react";
import BrandImage from "./assests/images/brand-image.png";

function BookingForm() {
    const [data, setData] = useState({
        destination: "",
        persons: 1,
        startDate: new Date(),
        endDate: new Date(),
        description: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            data.destination &&
            data.persons !== "" &&
            data.startDate &&
            data.endDate &&
            data.description.length >= 50 &&
            data.endDate > data.startDate
        ) {
            alert("Your Booking Has Been Successfully Done!");

            // clear form fields
            setData({
                destination: "",
                persons: 1,
                startDate: "",
                endDate: "",
                description: "",
            });
        } else {
            alert("Please fill out all required fields correctly before submitting.");
        }
    }
    return (
        <>
          <section className="travel-form">
              <div className="container">
                  <div className=" formrow">
                      <div className=" col-md-7">
                          <img src={BrandImage} alt="brand-image" className="img-fluid" />
                      </div>
                      <div className="col-md-6">
                          <form className=" form form-section" id="bookingForm">
                              <h2>Book Your Spot</h2>

                              {/* Where to  */}
                              <label htmlFor="destination">Where to:</label>
                              <select
                                  id="destination"
                                  name="destination"
                                  value={data.destination}
                                  onChange={handleChange}
                                  className="form-select"
                                  required
                              >
                                  <option value="">Select a place</option>
                                  <option value="United State">United State</option>
                                  <option value="India">India</option>
                                  <option value="France">France</option>
                                  <option value="Germany">Germany</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="Canada">Canada</option>
                              </select>

                              {/* How Many Persons  */}
                              <div className="mb-3">
                                  <label className="form-label" htmlFor="persons">
                                      Number of Persons:
                                  </label>
                                  <input
                                      type="number"
                                      placeholder="Type 1 if only one person travelling"
                                      className="form-control"
                                      id="persons"
                                      name="persons"
                                      value={Number(data.persons)}
                                      onChange={handleChange}
                                      min={1}
                                      max={10}
                                      required
                                  />
                              </div>

                              {/* Start Date  */}
                              <div className="col-md-6 mb-3">
                                  <label className="form-label" htmlFor="startDate">
                                      Start Date:
                                  </label>
                                  <input
                                      type="date"
                                      className="form-control"
                                      id="startDate"
                                      name="startDate"
                                      value={data.startDate}
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                              {/* End Date  */}
                              <div className="col-md-6 mb-3">
                                  <label className="form-label" htmlFor="endDate">
                                      End Date:
                                  </label>
                                  <input
                                      type="date"
                                      className="form-control"
                                      id="endDate"
                                      name="endDate"
                                      value={data.endDate}
                                      onChange={handleChange}
                                      required
                                  />
                              </div>

                              {/* Description  */}
                              <div className="mb-3">
                                  <label className="form-label" htmlFor="description">
                                      Description (min 50 characters):
                                  </label>
                                  <textarea
                                      name="description"
                                      value={data.description}
                                      onChange={handleChange}
                                      className="form-control"
                                      id="description"
                                      minLength="50"
                                      cols="50"
                                      maxLength="500"
                                      placeholder="Tell us about your dream place..."
                                      required
                                  ></textarea>
                              </div>

                              {/* Book Now Button  */}
                              <button
                                  type="submit"
                                  onClick={(e) => handleSubmit(e)}
                                  className="btn btn-dark"
                                  id="submit"
                              >
                                  Book Now
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default BookingForm;
