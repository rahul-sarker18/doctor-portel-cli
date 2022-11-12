import React from "react";

const AppoinmentOption = ({ option, setmosdelvalue }) => {
  const { name, slots } = option;
  return (
    <div className="card text-center  shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-success">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center">
          <label
          disabled={slots.length === 0}
            onClick={() => setmosdelvalue(option)}
            htmlFor="appoinment-modal"
            className="btn btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
