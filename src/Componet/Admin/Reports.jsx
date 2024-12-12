import React, { useState, useEffect } from "react";

function Reports() {
  const [adminMessage, setAdminMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/messages");
        if (response.ok) {
          const data = await response.json();
          setMessages(data.formMessages || []);
          setAdminMessage(data.adminMessage || "");
        } else {
          setError("Failed to fetch data from the server.");
        }
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("An error occurred while fetching data.");
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  const handleAdminMessageChange = (e) => {
    setAdminMessage(e.target.value);
  };

  const handleSaveMessage = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminMessage }),
      });

      if (response.ok) {
        alert("Admin message saved successfully!");
      } else {
        alert("Failed to save admin message.");
      }
    } catch (err) {
      console.error("Error saving admin message:", err);
      alert("An error occurred while saving the message.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-400 p-6 h-[599px] overflow-auto">
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full mb-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin Portal
          </h1>
          
          <textarea
            value={adminMessage}
            onChange={handleAdminMessageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            placeholder="Enter the message for the Contact Us page"
          />
          <button
            onClick={handleSaveMessage}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Save Message
          </button>
        </div>
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
            Submitted Messages
          </h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-2 border-black">Name</th>
                  <th className="py-2 px-4 border-2 border-black">Email</th>
                  <th className="py-2 px-4 border-2 border-black">Subject</th>
                  <th className="py-2 px-4 border-2 border-black">Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-2 border-black">{msg.name}</td>
                    <td className="py-2 px-4 border-2 border-black">{msg.email}</td>
                    <td className="py-2 px-4 border-2 border-black">{msg.subject}</td>
                    <td className="py-2 px-4 border-2 border-black">{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;
