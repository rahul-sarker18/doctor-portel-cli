import React from "react";
import cheair from "../../../../assets/images/chair.png";
import bg from "../../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppinmentBaner = ({selected ,setSelected}) => {
 

  return (
    <div>
      <div style={{ background: `url(${bg})` }} className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse py-60">
          <img src={cheair} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div className="mr-28">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
            ;
          </div>
        </div>
      </div>
      <p className="text-center text-2xl text-primary mb-24">Available Appointments on{format(selected, "PP")}</p>
    </div>
  );
};

export default AppinmentBaner;
