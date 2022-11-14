import React from "react";
import { format } from "date-fns";

const AppinmentModal = ({ mosdelvalue,setmosdelvalue, selected }) => {
  const { name, slots } = mosdelvalue;
  const date = format(selected, "PP");

  const handelsubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      name,
      email,
      phone,
      slot,
      date,
    };
    console.log(booking);
    setmosdelvalue(null)
  };

  return (
    <>
      <input type="checkbox" id="appoinment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appoinment-modal"
            className=" btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          {/* form start */}
          <form onSubmit={handelsubmite} className="block">
            <label>
              <input
                className="p-2 rounded-xl my-3 w-full border-2 border-sky-500 block"
                type="text"
                disabled
                Value={date}
              />
            </label>
            <label>
              <select
                name="slot"
                className="select select-borderedp-2 rounded-xl my-3 w-full border-2 border-sky-500"
              >
                {slots.map((slots) => (
                  <option value={slots}>{slots}</option>
                ))}
              </select>
            </label>
            <label>
              <input
                name="name"
                placeholder="full name"
                className="p-2 rounded-xl my-3 w-full border-2 border-sky-500 block"
                type="text"
              />
            </label>
            <label>
              <input
                name="phone"
                placeholder="phone-number"
                className="p-2 rounded-xl my-3 w-full border-2 border-sky-500 block"
                type="number"
              />
            </label>
            <label>
              <input
                name="email"
                placeholder="email"
                className=" p-2 rounded-xl my-3 w-full border-2 border-sky-500 block"
                type="email"
              />
            </label>
            <button className="btn btn-success w-full">submite</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppinmentModal;
