import React from "react";
import "./contact.scss";

const companies = [
  {
    name: "Mala",
    img: "./assets/images/mala.png",
  },
];

export default function Contact() {
  return (
    <div className="contact-main">
      <h3>Contact Us</h3>
      <p>
        MPQ Services UK Ltd <br />
        Unit 4, Seax Way <br />
        Southfields Industrial Park <br />
        London, Essex <br />
        SS15 6SW
      </p>
      <p>Phone: 01277 81198</p>
      <p>Email: info@mpqservices.co.uk</p>
      <h3>Opening Hours</h3>
      <p>
        Mon - Fri: 8:00am - 17:00pm <br />
        Sat & Sun: Closed
      </p>
      <div className="contact-brands"></div>
    </div>
  );
}
