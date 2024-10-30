import React from "react";

function BookingForm() {
    return (
        <>
            <section class="travel-form">
                <div class="container">
                    <div class=" formrow">
                        <div class=" col-md-7">
                            <img
                                src="../images/brand-image.png"
                                alt="brand-image"
                                class="img-fluid"
                            />
                        </div>
                        <div class="col-md-6">
                            <form class=" form form-section" id="bookingForm">
                                <h2>Book Your Spot</h2>

                                {/* Where to  */}
                                <label for="destination">Where to:</label>
                                <select
                                    id="destination"
                                    name="destination"
                                    class="form-select"
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
                                <div class="mb-3">
                                    <label class="form-label" for="persons">
                                        Persons Travelling:
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Type 1 if only one person travelling"
                                        class="form-control"
                                        id="persons"
                                        name="persons"
                                        min="1"
                                        required
                                    />
                                </div>

                                {/* Start Date  */}
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="startDate">
                                        Start Date:
                                    </label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="startDate"
                                        name="startDate"
                                        required
                                    />
                                </div>
                                {/* End Date  */}
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="endDate">
                                        End Date:
                                    </label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="endDate"
                                        name="endDate"
                                        required
                                    />
                                </div>

                                {/* Description  */}
                                <div class="mb-3">
                                    <label class="form-label" for="description">
                                        Description (min 50 characters):
                                    </label>
                                    <textarea
                                        name="description"
                                        class="form-control"
                                        id="description"
                                        minlength="50"
                                        cols="50"
                                        maxlength="500"
                                        placeholder="Tell us about your dream place..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Book Now Button  */}
                                <button type="submit" class="btn btn-dark" id="submit">
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
