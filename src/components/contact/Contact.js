import React from "react";
import "./contact.scss";

const companies = [
  {
    name: "Mala",
    img: "./assets/images/mala.png",
  },
  {
    name: "Amd",
    img: "./assets/images/amd.png",
  },
  {
    name: "Bancroft",
    img: "./assets/images/bancroft.png",
  },
  {
    name: "Farr",
    img: "./assets/images/farr.png",
  },
  {
    name: "Michel",
    img: "./assets/images/michel-dale.png",
  },
];

export default function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-brands">
        {companies.map((item, i) => (
          <div key={i}>
            <img src={item.img} alt={item.name} />{" "}
          </div>
        ))}
      </div>
      <h3>Contact Us</h3>
      <p>
        MPQ Services UK Ltd <br />
        3, Derrick Gardens <br />
        London, Essex <br />
        SE7 7TA
      </p>
      <p>Phone: 07757 726095</p>
      <p>Email: powermantrust@gmail.com</p>
      <h3>Opening Hours</h3>
      <p>
        Mon - Fri: 8:00am - 17:00pm <br />
        Sat & Sun: Closed
      </p>
    </div>
  );
}
