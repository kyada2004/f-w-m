import React, { useEffect, useState } from "react";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [requests, setRequests] = useState([]);
  const [newRequests, setNewRequests] = useState(0);
  const [rejectedRequests, setRejectedRequests] = useState(0);
  const [completedRequests, setCompletedRequests] = useState(0);

  useEffect(() => {
    const storedImage = localStorage.getItem("donerImage");
    const storedName = localStorage.getItem("donerName");

    if (storedImage) setImage(storedImage);
    if (storedName) setName(storedName);

    const storedRequests = JSON.parse(localStorage.getItem("foodRequests")) || [];
    setRequests(storedRequests);

    // Classify requests by status
    setNewRequests(storedRequests.filter(req => req.status === "new").length);
    setRejectedRequests(storedRequests.filter(req => req.status === "rejected").length);
    setCompletedRequests(storedRequests.filter(req => req.status === "completed").length);
  }, []);

  return (
    <div>
      <div className="flex-grow bg-gradient-to-r from-pink-300 to-purple-400 p-6 h-[599px] overflow-auto">
        {/* Top Bar */}
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

        {/* Dashboard Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-red-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Total State</h2>
            <p className="text-3xl">{/* Implement state calculation here */}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Total City</h2>
            <p className="text-3xl">{/* Implement city calculation here */}</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Total Food Donor</h2>
            <p className="text-3xl">{/* Implement donor count here */}</p>
          </div>
          <div className="bg-pink-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Total Listed Food</h2>
            <p className="text-3xl">{requests.length}</p> 
          </div>
          <div className="bg-gray-700 text-white p-4 rounded-lg shadow col-span-1">
            <h2 className="text-xl font-bold">All Requests</h2>
            <p className="text-3xl">{requests.length}</p>
          </div>
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">New Requests</h2>
            <p className="text-3xl">{newRequests}</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Rejected Requests</h2>
            <p className="text-3xl">{rejectedRequests}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Food Take Away/Request Completed</h2>
            <p className="text-3xl">{completedRequests}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
