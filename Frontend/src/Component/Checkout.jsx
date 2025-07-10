import React, { useState, useEffect } from "react";
import "../Styles/Checkout.css";


export default function Checkout() {
  const storedCourse = localStorage.getItem("selectedCourse");
  const Course = storedCourse ? JSON.parse(storedCourse) : null;

if (!Course) {
  return <div style={{ padding: "2rem", textAlign: "center" }}>Loading course details...</div>;
}
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 45,
    seconds: 22,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Processing enrollment... Please wait for confirmation.");
  };



  return (
    <div className="Course-checkout-Container">
      <div className="Parent-Container">
        <div className="Course-checkout-Card">
          <div className="course-header">
            <div className="accreditation-badge">ACCREDITED PROGRAM</div>
            <h2>{Course?.subtitle || "Course Subtitle Coming Soon"}</h2>
            <p className="course-code">
             {Course.category} | Duration: 6 Months
            </p>

            <div className="price-section">
              <div className="price-main">
                <span className="currency">₹</span>
                <span className="current-price">{Course.price}</span>
              </div>
              <div className="price-details">
                <span className="original-price">₹1999</span>
                <span className="discount-text">Limited Time: 50% OFF</span>
              </div>
            </div>
          </div>

          <div className="checkout-image-container">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional Web Development Course"
            />
            <div className="course-stats">
              <div className="stat-item">
                <span className="stat-number">180+</span>
                <span className="stat-label">Contact Hours</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Industry Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Job Placement</span>
              </div>
            </div>
          </div>

          <div className="certification-details">
            <h3>Professional Certification Includes:</h3>
            <ul className="certification-list">
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Industry-Recognized Professional Certificate
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                25+ Production-Grade Portfolio Projects
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated Career Placement Support
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Live Expert Mentorship Sessions
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Lifetime Access to Course Materials
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Alumni Network Access (5000+ Professionals)
              </li>
            </ul>
          </div>

          <div className="urgency-section">
            <div className="urgency-header">
              <svg
                className="urgency-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>ENROLLMENT DEADLINE</span>
            </div>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-number">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="time-label">HOURS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span className="time-number">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="time-label">MINUTES</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span className="time-number">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="time-label">SECONDS</span>
              </div>
            </div>
            <p className="deadline-warning">
              After this deadline, regular pricing of ₹49,999 will apply
            </p>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>SECURE ENROLLMENT FORM</h2>
            <p className="enrollment-notice">
              All information is encrypted and processed securely
            </p>
          </div>

          <div className="enrollment-stats">
            <div className="stat">
              <span className="stat-number">2,847</span>
              <span className="stat-label">Students Enrolled This Month</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">
                Average Rating (1,200+ Reviews)
              </span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="firstName">FIRST NAME *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="lastName">LAST NAME *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-field">
                <label htmlFor="email">EMAIL ADDRESS *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your professional email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">PHONE NUMBER *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your contact number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="compliance-section">
            <div className="compliance-badges">
              <div className="compliance-badge">
                <svg
                  className="compliance-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>256-BIT SSL ENCRYPTION</span>
              </div>
              <div className="compliance-badge">
                <svg
                  className="compliance-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
                <span>PCI DSS COMPLIANT</span>
              </div>
              <div className="compliance-badge">
                <svg
                  className="compliance-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GDPR COMPLIANT</span>
              </div>
            </div>
          </div>

          <button type="submit" className="checkout-button">
            <span className="button-text">SECURE ENROLLMENT - ₹{Course.price}</span>
            <svg
              className="button-arrow"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="institutional-trust">
            <div className="trust-badges">
              <div className="trust-item">
                <svg
                  className="trust-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="trust-content">
                  <span className="trust-title">ACCREDITED INSTITUTION</span>
                  <span className="trust-subtitle">Government Recognized</span>
                </div>
              </div>
              <div className="trust-item">
                <svg
                  className="trust-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2L3 7v11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="trust-content">
                  <span className="trust-title">ENTERPRISE SECURITY</span>
                  <span className="trust-subtitle">Bank-Level Protection</span>
                </div>
              </div>
              <div className="trust-item">
                <svg
                  className="trust-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="trust-content">
                  <span className="trust-title">PROFESSIONAL CERTIFICATE</span>
                  <span className="trust-subtitle">Industry Validated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="guarantee-section">
            <div className="guarantee-badge">
              <svg
                className="guarantee-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2L3 7v11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-7-5z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="guarantee-content">
                <h4>INSTITUTIONAL GUARANTEE</h4>
                <p>
                  Complete refund within 30 days if program standards are not
                  met as per institutional policy
                </p>
              </div>
            </div>
          </div>

          <div className="legal-notice">
            <p>
              By enrolling, you agree to our Terms of Service and Privacy
              Policy. This is a legally binding enrollment contract.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
