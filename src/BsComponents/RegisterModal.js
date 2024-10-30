import React from "react";

function RegisterModal() {
    return (
        <>
            <div
                class="modal fade"
                id="registermodal"
                tabindex="5"
                aria-labelledby="registermodallabel"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 id="registermodallabel">Register</h2>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-2">
                                    <label for="fullname" class="col-form-label">
                                        Full Name:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="ex. John Doe"
                                        class="form-control form-text"
                                        id="fullname"
                                    />
                                </div>
                                <div class="mb-2">
                                    <label for="contact" class="col-form-label">
                                        Contact:
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="ex. 123456789"
                                        class="form-control"
                                        id="contact"
                                    />
                                </div>
                                <div class="mb-2">
                                    <label for="dob" class="col-form-label">
                                        Date Of Birth:
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="ex. 12/15/1995"
                                        class="form-control"
                                        id="dob"
                                    />
                                </div>
                                <div class="mb-2">
                                    <label for="email" class="col-form-label">
                                        Email ID:
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="ex. example@gmail.com"
                                        class="form-control"
                                        id="email"
                                    />
                                </div>
                                <div class="mb-2">
                                    <label for="password" class="col-form-label">
                                        Password:
                                    </label>
                                    <input type="password" class="form-control" id="password" />
                                    <small id="validation" class="text-danger fw-semibold">
                                        Password should be minimum 8 and maximum 15 characters
                                        contains smallcase, uppercase, one number, one special
                                        character
                                    </small>
                                </div>
                                <div class="mb-2">
                                    <label for="gender" class="col-form-label">
                                        Gender:
                                    </label>
                                    <div class="ms-4 form-check form-check-inline">
                                        <input
                                            type="radio"
                                            class="form-check-input"
                                            name="gender"
                                            id="gender"
                                            aria-label="female"
                                        />
                                        Female
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            class="form-check-input"
                                            name="gender"
                                            id="gender"
                                            aria-label="male"
                                        />
                                        Male
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex flex-column align-items-start justify-content-start gap-4">
                            <button type="button" class="w-100 btn btn-outline-dark">
                                Register
                            </button>
                            <p>
                                Already have an account? Go{" "}
                                <a
                                    href="#login"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginmodal"
                                    class="text-dark"
                                >
                                    Login
                                </a>{" "}
                                Yourself!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterModal;
