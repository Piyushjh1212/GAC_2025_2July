import React from "react";
import "../Styles/Checkout.css";

export default function Checkout() {
  return (
    <div className="Course-checkout-Container">
      <div className="Parent-Container">
        <div className="Course-checkout-Card">
          <h1>Html And CSS course</h1>
          <div className="checkout image-container-chek">
            <img
              src=""
              alt=""
            />
          </div>

          <ul className="course-benefits">
            <li>✅ Build 10+ Real Projects</li>
            <li>✅ Learn Full Stack: HTML, CSS, JS, React, Node, MongoDB</li>
            <li>✅ Lifetime Access + Certificate</li>
            <li>✅ 24x7 Support on WhatsApp + Community</li>
          </ul>

          {/* Trust + Countdown */}
          <div className="extra-info">
            <div className="trust-badges">
              <span>🧑‍🏫 Verified Instructor</span>
              <span>🔐 Secure Payment</span>
              <span>🧾 Certificate Included</span>
            </div>
            <p className="countdown">⏰ Offer ends in: 11:45:22</p>
          </div>
        </div>

        <form className="form checkout-form">
          {" "}
          {/* onSubmit={HandlaCheckoutForSubmit} */}
          <div className="input flex-card-upper">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input flex-card">
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Phone No" />
          </div>
          <button className="button checkout-button">Pay Now</button>
        </form>
      </div>
    </div>
  );
}
