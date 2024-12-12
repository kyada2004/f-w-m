import React, { useState } from "react";

function City() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a State name.");
      setFilteredRequests([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3000/api/donerfood?state=${searchTerm}`
      );

      if (response.ok) {
        const data = await response.json();
        setFilteredRequests(data);
      } else {
        setError("Failed to fetch data. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("An error occurred while fetching data.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 h-[599px] overflow-auto">
      <div className="flex justify-center items-center gap-7 pt-[100px]">
        <label
          htmlFor="Search"
          className="text-2xl font-medium text-gray-700 flex items-center justify-center"
        >
          City
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

      {/* Display errors or loading message */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}

      {/* Display filtered requests */}
      <div className="mt-10 overflow-y-auto">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <div
              key={request.requestNumber}
              className="bg-white p-4 mb-4 rounded shadow-md"
            >
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
          <p className="text-center text-gray-500">
            {loading ? "" : "No requests found for this State."}
          </p>
        )}
      </div>
    </div>
  );
}

export default City;
