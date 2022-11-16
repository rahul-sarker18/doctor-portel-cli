import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Context/UserContex";
import toast from "react-hot-toast";

const AppinmentModal = ({ mosdelvalue, setmosdelvalue, selected , refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, _id } = mosdelvalue;
  const date = format(selected, "PP");


  const handelsubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const username = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = { id: _id, name, username, email, phone, slot, date};
    console.log(booking);

    fetch("http://localhost:5000/bokings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if(data.acknowledged){
          toast.success('congratuation !!')
          refetch()
          setmosdelvalue(null);
        }
        else{
          toast.error(data.message)
          setmosdelvalue(null);
        }
        
      });
      
     
   
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
                defaultValue={date}
              />
            </label>
            <label>
              <select
                name="slot"
                className="select select-borderedp-2 rounded-xl my-3 w-full border-2 border-sky-500"
              >
                {slots.map((slots, index) => (
                  <option key={index} value={slots}>
                    {slots}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <input
                name="name"
                defaultValue={user?.displayName}
                disabled
                placeholder="full name"
                className="p-2 rounded-xl my-3 w-full border-2 border-sky-500 block"
                type="text"
              />
            </label>
            <label>
              <input
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="email"
                className=" p-2 rounded-xl my-3 w-full border-2 border-sky-500 block"
                type="email"
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

            <button className="btn btn-success w-full">submite</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppinmentModal;
