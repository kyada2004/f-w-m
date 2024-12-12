import React, { useState, useEffect } from "react";

function Searchlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodRequests, setFoodRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    const existingRequests =
      JSON.parse(localStorage.getItem("foodRequests")) || [];
    setFoodRequests(existingRequests);
  }, []);

  const handleSearch = () => {
    const results = foodRequests.filter((request) =>
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      request.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.state.toLowerCase().includes(searchTerm.toLowerCase()) || 
      request.foodItem.toLowerCase().includes(searchTerm.toLowerCase()) || 
      request.approvalStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.personalNumber.toLowerCase().includes(searchTerm.toLowerCase()) || 
      request.quantity.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRequests(results);
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 h-[599px] overflow-auto">
    <div className="flex justify-center items-center gap-7 pt-[100px] ">
      <label
        htmlFor="Search"
        className="text-2xl font-medium text-gray-700 flew items-center justify-center"
      >
        Search
      </label>
      <input
        id="Search"
        name="Search"
        type="search"
        className="mt-1 block px-3 py-2 w-[500px] border border-gray-300 rounded-md shadow-sm"
        required
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="button"
        onClick={handleSearch}
        className="bg-white w-20 text-xl font-semibold text-gray-500 h-12 rounded-xl border-red-400 hover:border-green-400 border-4"
      >
        Search
      </button>
    </div>

    <div className="mt-10 ">
      {filteredRequests.length > 0 ? (
        filteredRequests.map((request) => (
          <div key={request.requestNumber} className="bg-white p-4 mb-4 rounded shadow-md ">
            <h2 className="text-lg font-bold">{request.foodItem}</h2>
            <p>Quantity: {request.quantity}</p>
            <p>Name: {request.name}</p>
            <p>City: {request.city}</p>
            <p>State: {request.state}</p>
            <p>Contact: {request.personalNumber}</p>
            <p>Address: {request.address}</p>
            <p>Status: {request.approvalStatus}</p>
          
          </div>
        ))
      ) : (
        <p className="text-center text-xl text-gray-700">No requests found for this city.</p>
      )}
    </div>

  
  </div>
  );
}

export default Searchlist;
