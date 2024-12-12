import React, { useState, useEffect } from "react";

const RegFoods = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("foodRequests")) || [];
    setRequests(savedRequests);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 p-6 h-[599px] overflow-auto">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Reg. Food Doners
        </h1>
        <table className="min-w-full bg-white ">
          <thead>
            <tr>
              <th className="py-4 px-6 border-2 border-black">Name</th>
              <th className="py-4 px-6 border-2 border-black">Food Item</th>
              <th className="py-4 px-6 border-2 border-black">City</th>
              <th className="py-4 px-6 border-2 border-black">State</th>
              <th className="py-4 px-6 border-2 border-black">Approval Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="text-center ">
                <td className="py-4 px-6 border-2 border-black">{request.name}</td>
                <td className="py-4 px-6 border-2 border-black">{request.foodItem}</td>
                <td className="py-4 px-6 border-2 border-black">{request.city}</td>
                <td className="py-4 px-6 border-2 border-black">{request.state}</td>
                <td className="py-4 px-6 border-2 border-black">{request.approvalStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegFoods;
