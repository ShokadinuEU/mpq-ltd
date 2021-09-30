import React from "react";
import "./features.scss";

const features = [
  {
    icon: "./assets/images/wide-exp.png",
    icon1: "./images/wide-exp.png",
    title: "Wide Experience",
    info: "A team of over 10 years experience",
  },
  {
    icon: "./assets/images/accurate.png",
    icon1: "./images/accurate.png",
    title: "Accurate Estimations",
    info: "Accurate estimations at a competitive prices",
  },
  {
    icon: "./assets/images/100-equip.png",
    icon1: "./images/100-equip.png",
    title: "100% Equipped",
    info: "With the latest in the protection and safety for all",
  },
];

export default function Features() {
  return (
    <div className="feature-main">
      {features.map((item, i) => (
        <div className="feature-individual" key={i}>
          <img src={item.icon} alt={item.title} width="70" height="55" />
          <h3>{item.title}</h3>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
}
