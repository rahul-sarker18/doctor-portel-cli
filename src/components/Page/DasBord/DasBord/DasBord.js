import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContex";

const DasBord = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bokings?email=${user?.email}`;
  const { data = [] } = useQuery({
    queryKey: ["bokings", user?.email],
    queryFn: async () => {
      const res = await fetch(url ,{
        headers:{
          authorization : `bearar ${localStorage.getItem('token')} `
        }
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-normal my-6">My Appointment</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, i) => (
              <tr key={p._id}>
                <th>{i + 1}</th>
                <td>{p.username}</td>
                <td>{p.name}</td>
                <td>{p.slot}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DasBord;
