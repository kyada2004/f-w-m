import React, { useState } from 'react';


const Donerfood = () => {
    const [formData, setFormData] = useState({
        foodItem: "",
        quantity: "",
        name: "",
        city: "",
        state: "",
        personalNumber: "",
        address: "",
        approvalStatus: "Pending",
    });
    
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        if (formData.quantity <= 0) {
            setErrorMessage("Quantity must be a positive number.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        setLoading(true);
    
        const newRequest = {
            ...formData,
            requestNumber: Date.now(),
        };
    
        try {
            const response = await fetch('http://localhost:3000/api/donerfood', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRequest),
            });
    
            if (response.ok) {
                alert("Your food request has been submitted successfully!");
                setFormData({
                    foodItem: "",
                    quantity: "",
                    name: "",
                    city: "",
                    state: "",
                    personalNumber: "",
                    address: "",
                    approvalStatus: "Pending",
                });
                setErrorMessage("");
            } else {
                const result = await response.json();
                alert(result.message || "Failed to submit the request.");
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            alert("An error occurred. Please try again.");
        }
    
        setLoading(false);
    };
    

    return (
        <div className="bg-gradient-to-r from-pink-300 to-purple-400 h-[599px] overflow-auto">
            <div className="max-w-md mx-auto mt-10 h-full">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Food Waste Management
                </h1>
                <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    {Object.entries(formData).map(([key, value]) => (
                        <div className="mb-4" key={key}>
                            <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                            <input
                                id={key}
                                name={key}
                                type={key === "quantity" ? "number" : key === "personalNumber" ? "tel" : "text"}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                value={value}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white`}
                    >
                        {loading ? 'Submitting...' : 'Submit Request'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donerfood;
