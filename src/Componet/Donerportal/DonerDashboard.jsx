import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DonerDashboard() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [totalFoodListed, setTotalFoodListed] = useState(0);
  const [requestsCompleted, setRequestsCompleted] = useState(0);
  const [rejectedRequests, setRejectedRequests] = useState(0);
  const [allRequests, setAllRequests] = useState(0);
  const [newRequests, setNewRequests] = useState(0);

  useEffect(() => {
    const storedImage = localStorage.getItem("donerImage");
    const storedName = localStorage.getItem("donerName");

    if (storedImage) setImage(storedImage);
    if (storedName) setName(storedName);

    const storedRequests = JSON.parse(localStorage.getItem("foodRequests")) || [];
    
    setTotalFoodListed(storedRequests.filter(req => req.status === "listed").length);
    setRequestsCompleted(storedRequests.filter(req => req.status === "completed").length);
    setRejectedRequests(storedRequests.filter(req => req.status === "rejected").length);
    setAllRequests(storedRequests.length);
    setNewRequests(storedRequests.filter(req => req.status === "new").length);
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 h-[599px] overflow-auto">
      <div className="mx-3 mt-[20px]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-200 rounded-full">📧</button>
            <span className="bg-red-500 text-white px-2 py-1 rounded-full">{newRequests}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{name || "Admin"}</span>
            <img
              className="w-10 h-10 rounded-full"
              src={image || "https://via.placeholder.com/150"}
              alt="Admin profile"
            />
          </div>
        </div>
        
        {/* DonerDashboard Stats Grid with clickable boxes */}
        <div className="grid grid-cols-4 gap-4">
          <Link to="/doner/donernavabar/requests" className="bg-red-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Total Listed Food</h2>
            <p className="text-3xl">{totalFoodListed}</p>
          </Link>
          
          <Link to="/doner/donernavabar/requests" className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Food Take Away/Request Completed</h2>
            <p className="text-3xl">{requestsCompleted}</p>
          </Link>
          
          <Link to="/rejected-requests" className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Rejected Requests</h2>
            <p className="text-3xl">{rejectedRequests}</p>
          </Link>
          
          <Link to="/doner/donernavabar/requests" className="bg-gray-700 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">All Requests</h2>
            <p className="text-3xl">{allRequests}</p>
          </Link>
          
          <Link to="/doner/donernavabar/donerfood" className="bg-gray-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">New Requests</h2>
            <p className="text-3xl">{newRequests}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonerDashboard;
