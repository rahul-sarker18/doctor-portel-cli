import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loder from "../../../Shared/Loder/Loder";
import AppinmentModal from "../AppinmentModal/AppinmentModal";
import AppoinmentOption from "./AppoinmentOption";

const AbableAppoinment = ({ selected }) => {
  const [mosdelvalue, setmosdelvalue] = useState(null);

  const date = format(selected, "PP");
  console.log(date);
  // react queary
  const { data: appinmentoption = [] ,refetch , isLoading} = useQuery({
    querykeyy: ["appinmentoption", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appinmentOption?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loder/>
  }

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appinmentoption.map((option) => (
          <AppoinmentOption
            key={option._id}
            option={option}
            setmosdelvalue={setmosdelvalue}
          ></AppoinmentOption>
        ))}
      </div>

      {mosdelvalue && (
        <AppinmentModal
        refetch={refetch}
          selected={selected}
          setmosdelvalue={setmosdelvalue}
          mosdelvalue={mosdelvalue}
        />
      )}
    </div>
  );
};

export default AbableAppoinment;
