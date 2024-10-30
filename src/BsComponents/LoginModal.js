import React from "react";

function LoginModal() {
    return (
        <>
            <div
                class="modal fade"
                id="loginmodal"
                tabindex="5"
                aria-labelledby="loginmodallabel"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 id="loginmodallabel">Login</h2>
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
                                        Email ID:
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control form-text"
                                        id="fullname"
                                    />
                                </div>
                                <div class="mb-2">
                                    <label for="password" class="col-form-label">
                                        Password:
                                    </label>
                                    <input type="tel" class="form-control" id="password" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer d-flex flex-column align-items-start justify-content-start gap-4">
                            <button type="button" class="w-100 btn btn-outline-dark">
                                Login
                            </button>
                            <p>
                                Don't have an account? Go{" "}
                                <a
                                    href="#register"
                                    data-bs-toggle="modal"
                                    data-bs-target="#registermodal"
                                    class="text-dark"
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
