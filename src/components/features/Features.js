import React from "react";
import "./features.scss";

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

export default function Features() {
  return (
    <div className="feature-main">
      {features.map((item) => (
        <div className="feature-individual">
          <image src={item.icon} />
          <h3>{item.title}</h3>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
}
