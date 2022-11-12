import React from "react";
import banerlogo from "../../../../assets/images/chair.png";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import bg from "../../../../assets/images/bg.png"

const Baner = () => {
  return (
    <div>
      <div className="hero" style={{background:`url(${bg})`}}>
        <div className="hero-content flex-col lg:flex-row-reverse mb-[239px]">
          <img src={banerlogo} className=" lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* bottom part */}

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 1 */}
        <div className="h-[190px] w-[450px] rounded-xl flex  px-6 py-14 bg-accent text-white  bg-gradient-to-r from-primary to-secondary">
          <div className="w-[86px] h-[86px] mr-6">
            <img src={clock} alt="" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold mb-4">Opening Hours</h3>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        {/* 2 */}
        <div className="h-[190px] w-[450px] rounded-xl flex  px-6 py-14 bg-accent text-white">
          <div className="w-[62px] h-[86px] mr-6">
            <img src={marker} alt="" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold mb-4" >Visit our location</h3>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        {/* 3 */}
        <div className="h-[190px] w-[450px] flex rounded-xl  px-6 py-14 bg-accent text-white  bg-gradient-to-r from-primary to-secondary">
          <div className="w-[77px] h-[77px] mr-6 ">
            <img src={phone} alt="" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold mb-4">Contact us now</h3>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
