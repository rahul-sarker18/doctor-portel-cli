import React from "react";
import cavity from "../../../../assets/images/cavity.png";
import fluoride from "../../../../assets/images/fluoride.png";
import whitening from "../../../../assets/images/whitening.png";
import ExDantel from "./ExDantel";
import ServiceCart from "./ServiceCart";
const Services = () => {
  //API SERVICES
  const api = [
    {
      id: 1,
      name: "Fluoride Treatment",
      title:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      title:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      title:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];

  return (
    <div>
      <div className="text-center mt-[111px]">
        <h2 className="text-primary font-bold text-[20px] mb-2">
          OUR SERVICES
        </h2>
        <h1 className="text-[36px] font-normal">Services We Provide</h1>
      </div>

      {/* service cart */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        {api.map((ap) => (
          <ServiceCart key={ap.id} service={ap}></ServiceCart>
        ))}
      </div>

      <div className="mt-14">
        <ExDantel />
      </div>
    </div>
  );
};

export default Services;
