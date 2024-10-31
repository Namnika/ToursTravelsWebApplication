import React from "react";

function LoginModal() {
    return (
        <>
            <div
                className="modal fade"
                id="loginmodal"
                tabIndex="5"
                aria-labelledby="loginmodallabel"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 id="loginmodallabel">Login</h2>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-2">
                                    <label htmlFor="fullname" className="col-form-label">
                                        Email ID:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-text"
                                        id="fullname"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="password" className="col-form-label">
                                        Password:
                                    </label>
                                    <input type="tel" className="form-control" id="password" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex flex-column align-items-start justify-content-start gap-4">
                            <button type="button" className="w-100 btn btn-outline-dark">
                                Login
                            </button>
                            <p>
                                Don't have an account? Go{" "}
                                <a
                                    href="#register"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registermodal"
                                    className="text-dark"
                                >
                                    Register
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

export default LoginModal;
