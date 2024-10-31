import React, { useState } from "react";

function RegisterModal() {
  const [data, setData] = useState({
    email: "",
    password: "",
    contact: "",
  });
  let notValidPass =
    "Password should be minimum 8 and maximum 15 characters contains smallcase, uppercase, one number, one special character";

  let notValidEmail =
    "Please enter a valid email address in the format 'example@domain.com'.";

  let notValidContact = "Contact Number should contain only 10 digits.";

  const [notValidPassText, setValidPassText] = useState({
    text: notValidPass,
    className: "danger",
  });
  const [notValidEmailText, setValidEmailText] = useState({
    text: notValidEmail,
    className: "danger",
  });
  const [notValidContactText, setValidContactText] = useState({
    text: notValidContact,
    className: "danger",
  });

  const emailregex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,})$/;
  const contactregex = /^[0-9]{3}?[0-9]{3}?[0-9]{4}$/;
  const passregex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*"'-]).{8,15}$/;

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      setValidEmailText({
        text: emailregex.test(value) ? "✅" : notValidEmail,
        className: emailregex.test(value) ? "success" : "danger",
      });
    }

    if (name === "password") {
      setValidPassText({
        text: passregex.test(value) ? "Validated" : notValidPass,
        className: passregex.test(value) ? "success" : "danger",
      });
    }

    if (name === "contact") {
      setValidContactText({
        text: contactregex.test(value) ? "✅" : notValidContact,
        className: contactregex.test(value) ? "success" : "danger",
      });
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="registermodal"
        tabIndex="5"
        aria-labelledby="registermodallabel"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="registermodallabel">Register</h2>
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
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="ex. John Doe"
                    className="form-control form-text"
                    id="fullname"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="contact" className="col-form-label">
                    Contact:
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={data.contact}
                    onChange={handleChange}
                    placeholder="ex. 123456789"
                    className="form-control"
                    id="contact"
                  />
                  <small
                    id="validation"
                    className={`text-${notValidContactText.className} fw-semibold`}
                  >
                    {notValidContactText.text}
                  </small>
                </div>
                <div className="mb-2">
                  <label htmlFor="dob" className="col-form-label">
                    Date Of Birth:
                  </label>
                  <input
                    type="date"
                    placeholder="ex. 12/15/1995"
                    className="form-control"
                    id="dob"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="col-form-label">
                    Email ID:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="ex. example@gmail.com"
                    className="form-control"
                    id="email"
                  />
                  <small
                    id="validation"
                    className={`text-${notValidEmailText.className} fw-semibold`}
                  >
                    {notValidEmailText.text}
                  </small>
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="col-form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                  />
                  <small
                    id="validation"
                    className={`text-${notValidPassText.className} fw-semibold`}
                  >
                    {notValidPassText.text}
                  </small>
                </div>
                <div className="mb-2">
                  <label htmlFor="gender" className="col-form-label">
                    Gender:
                  </label>
                  <div className="ms-4 form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="gender"
                      aria-label="female"
                    />
                    Female
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                      id="gender"
                      aria-label="male"
                    />
                    Male
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex flex-column align-items-start justify-content-start gap-4">
              <button type="button" className="w-100 btn btn-outline-dark">
                Register
              </button>
              <p>
                Already have an account? Go{" "}
                <a
                  href="#login"
                  data-bs-toggle="modal"
                  data-bs-target="#loginmodal"
                  className="text-dark"
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
