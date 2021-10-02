import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-details">
        <h3>Contact Us</h3>
        <p>
          MPQ Services UK Ltd <br />
          3, Derrick Gardens <br />
          London, Essex <br />
          SE7 7TA
        </p>
        <p>Phone: 07757 726095</p>
        <p>Email: powermantrust@gmail.com</p>
      </div>
      <div className="contact-openings">
        <h3>Opening Hours</h3>
        <p>
          Mon - Fri: 8:00am - 17:00pm <br />
          Sat: 10:00 am - 14:00 pm <br />
          Sun: Closed
        </p>
      </div>
    </div>
  );
}
