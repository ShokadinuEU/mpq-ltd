import React from "react";
import "./info-gen.scss";

const infoGenData = [
  {
    h3: "At MPQ Services our team are competent in the safe systems of work practices",
    p: "At MPQ Services we look at every work environment from a safety point of view, assessing the risks involved and implementing a safe system of work to suit; through means of method statements, risk assessments and providing our personnel with the correct equipment to perform their duties as well as the correct level of competency and specific training.",
    img: "./assets/images/safety-systems.jpg",
  },
  {
    h3: "Training",
    p: "At MPQ Services we look at every work environment from a safety point of view, assessing the risks involved and implementing a safe system of work to suit; through means of method statements, risk assessments and providing our personnel with the correct equipment to perform their duties as well as the correct level of competency and specific training.",
    img: "./assets/images/training.jpg",
  },
  {
    h3: "Suppliers",
    p: "At MPQ Services we look at every work environment from a safety point of view, assessing the risks involved and implementing a safe system of work to suit; through means of method statements, risk assessments and providing our personnel with the correct equipment to perform their duties as well as the correct level of competency and specific training.",
    img: "./assets/images/supplier.jpg",
  },
  {
    h3: "Recent Projects",
    p: "At MPQ Services UK Limited we can undertake a wide range of projects from small fit out refurbishment to large airside installations. We can accommodate our client’s requirements and adjust our company targets to suit each and every project on an individual basis.",
    img: "./assets/images/projects-1.jpg",
  },
];
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

export default function InfoGen() {
  return (
    <div className="infoGen-main">
      {/* intro to general section */}
      <img
        src="./assets/images/exp-duct.png"
        alt="ductwork experience"
        width="170"
        height="155"
      />
      <h3 className="gray-welcome">Welcome to MPQ(ManPowerQuality) UK Ltd</h3>
      <h3>
        MPQ Services operate as specialist ventilation and ductwork contractors
      </h3>
      <p>
        At MPQ Services we operate as specialist ventilation and ductwork
        contractor. Combining years of experience within the construction
        industry MPQ Services Limited has the capability and experience to
        manage a wide range of contracts from modest ductwork fit outs in small
        shops and residences, to large scale ventilation systems for multi story
        buildings and commercial dwellings.
      </p>
      <p>
        MPQ Services Limited provide our clients with excellent workmanship and
        faultless installations, ensuring up to date health and safety standards
        are adhered to and managed in accordance with the most contemporary
        construction regulations.
      </p>
      <h2>MPQ big logo</h2>
      {infoGenData.map((item, i) => (
        <div key={i}>
          <h3>{item.h3}</h3>
          <p>{item.p}</p>
          <img
            src={item.img}
            alt="ductwork specialist"
            width="170"
            height="155"
          />
        </div>
      ))}
      <div className="contact-brands">
        {companies.map((item, i) => (
          <div key={i}>
            <img src={item.img} alt={item.name} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
