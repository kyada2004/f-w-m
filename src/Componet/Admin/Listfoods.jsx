import React, { useState, useEffect } from 'react';

const Listfoods = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/donerfood');
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

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <div className="bg-gradient-to-r from-pink-300 to-purple-400 p-6 h-[599px] overflow-auto">
            <div className="max-w-2xl mx-[30px] mt-[30px]">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">List Food</h1>
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : requests.length === 0 ? (
                    <p className="text-center text-gray-500">No requests found.</p>
                ) : (
                    <table className="min-w-full bg-white border-2 border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                {Object.keys(requests[0]).map((key) => (
                                    <th
                                        className="border-2 border-gray-300 px-4 py-2 text-left"
                                        key={key}
                                    >
                                        {key.charAt(0).toUpperCase() +
                                            key.slice(1).replace(/([A-Z])/g, " $1")}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request, index) => (
                                <tr key={index}>
                                    {Object.values(request).map((value, i) => (
                                        <td className="border-2 border-gray-300 px-4 py-2" key={i}>
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Listfoods;
