import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Food() {
  const [latestRequest, setLatestRequest] = useState(null);

  useEffect(() => {
    // Get all requests from localStorage
    const storedRequests = JSON.parse(localStorage.getItem('foodRequests')) || [];
    // Set the last request as the latest request
    if (storedRequests.length > 0) {
      setLatestRequest(storedRequests[storedRequests.length - 1]);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-pink-300 to-purple-400 min-h-screen p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Food Details</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-4xl">
          {latestRequest ? (
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Register By</td>
                  <td className="p-4">{latestRequest.registerBy}</td>
                  <td className="p-4 font-semibold">Registered Mobile Number</td>
                  <td className="p-4">{latestRequest.registeredMobileNumber}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Registered Email</td>
                  <td className="p-4">{latestRequest.registeredEmail}</td>
                  <td className="p-4 font-semibold">Contact Person</td>
                  <td className="p-4">{latestRequest.contactPerson}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Contact Person Mobile Number</td>
                  <td className="p-4">{latestRequest.contactPersonMobileNumber}</td>
                  <td className="p-4 font-semibold">Pick Up Address</td>
                  <td className="p-4">{latestRequest.pickUpAddress}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">State Name</td>
                  <td className="p-4">{latestRequest.stateName}</td>
                  <td className="p-4 font-semibold">City Name</td>
                  <td className="p-4">{latestRequest.cityName}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Description</td>
                  <td className="p-4">{latestRequest.description}</td>
                  <td className="p-4 font-semibold">Pick Up Date</td>
                  <td className="p-4">{latestRequest.pickUpDate}</td>
                </tr>

              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No recent food requests available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Food;
