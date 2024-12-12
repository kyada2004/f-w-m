import React, { useEffect, useState } from "react";

const DonerRegFood = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch requests from API
  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/donerfood");
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      } else {
        console.error("Failed to fetch requests");
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
    setLoading(false);
  };

  // Delete request via API
  const deleteRequest = async (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        const response = await fetch(`http://localhost:3000/api/donerfood/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Request deleted successfully");
          setRequests((prevRequests) =>
            prevRequests.filter((request) => request._id !== id)
          );
        } else {
          console.error("Failed to delete request");
        }
      } catch (error) {
        console.error("Error deleting request:", error);
      }
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 h-full overflow-auto">
      <div className="w-full p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Submitted Requests</h1>
        
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : requests.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(requests[0] || {}).map((key) =>
                  key !== "_id" && key !== "__v" ? ( // Exclude database-specific fields
                    <th
                      className="border border-gray-300 px-4 py-2 text-left"
                      key={key}
                    >
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, " $1")}
                    </th>
                  ) : null
                )}
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id}>
                  {Object.entries(request).map(([key, value]) =>
                    key !== "_id" && key !== "__v" ? ( // Exclude database-specific fields
                      <td className="border border-gray-300 px-4 py-2" key={key}>
                        {value}
                      </td>
                    ) : null
                  )}
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => deleteRequest(request._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No requests available.</p>
        )}
      </div>
    </div>
  );
};

export default DonerRegFood;
