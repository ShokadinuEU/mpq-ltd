import React from "react";
import "./carousel.scss";

const features = [
  {
    icon: "fan",
    title: "Wide Experience",
    info: "A team of over 10 years experience",
  },
  {
    icon: "checks",
    title: "Accurate Estimations",
    info: "Accurate estimations at a competitive prices",
  },
  {
    icon: "labour",
    title: "100% Equipped",
    info: "With the latest in the protection and safety for all",
  },
];

export default function Carousel() {
  return (
    <div className="carousel-main">
      <div className="carousel-text">
        <p>
          Specialist Ventilation <br /> & <br /> Ductwork Contractor
        </p>
        <button>Our Services</button>
      </div>
      <div className="carousel-background"></div>
    </div>
  );
}
