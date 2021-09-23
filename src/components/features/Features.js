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
      {features.map((item) => (
        <div className="feature-individual">
          <img src={item.icon} alt={item.title} width="70" height="55" />
          <h3>{item.title}</h3>
          <p>{item.info}</p>
        </div>
      ))}
      <img
        src="./assets/images/exp-duct.png"
        alt="ductwork experience"
        width="170"
        height="155"
      />
      <h3>Welcome to MPQ UK Ltd</h3>
    </div>
  );
}
