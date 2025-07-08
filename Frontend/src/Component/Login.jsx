import React from "react";
import "../Styles/Login.css";
import LoginButton from "./Button";

export default function Login() {


  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="signup-container">
        <div className="signup-row">
          <div className="signup-text-column">
            <h1 className="signup-heading">
              The best offer <br />
              <span className="highlight">for your business</span>
            </h1>
            <p className="signup-subtext">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="signup-form-column">
            <div id="radius-shape-1" className="shape-circle"></div>
            <div id="radius-shape-2" className="shape-shadow"></div>

            <div className="form-card">
              <div className="form-body">
                <form>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="Form-check Forgot-pass">
                    Forgot Password
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Sign In your Account
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign In
                  </button>
                  <p>If you don't have an account please <a href=""> sign In</a></p>
                  


                  <div className="text-center">
                    <p>or sign up with:</p>
                    <div className="social-buttons">
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                          <LoginButton />
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
