import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../img/background.jpg";

function Admin() {
    const [usernameOrEmailOrPhone, setUsernameOrEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!usernameOrEmailOrPhone || !password) {
            setMessage("Please fill all the fields.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usernameOrEmailOrPhone, password }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage("Login successful!");
                navigate("/admin/adminNav/dashboard"); // Redirect to Admin Portal
            } else {
                setMessage(result.message || "Login failed.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />
            <div
                className="w-full h-auto flex justify-center items-center px-[5%] py-[5%] bg-orange-200"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <form
                    onSubmit={handleLogin}
                    className="border-4 p-[20px] m-[20px] border-black border-black-500/50"
                >
                    <label className="text-lg text-black decoration-solid flex m-[10px]">
                        Username/Gmail/Phone Number
                    </label>
                    <input
                        type="text"
                        placeholder="Enter username, Gmail, or phone"
                        value={usernameOrEmailOrPhone}
                        onChange={(e) => setUsernameOrEmailOrPhone(e.target.value)}
                        className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:text-black text-black"
                    />

                    <label className="text-lg text-black decoration-solid flex m-[10px]">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:text-black text-black"
                    />

                    {message && (
                        <p className="text-red-500 text-lg mt-4">{message}</p>
                    )}

                    <button
                        type="submit"
                        className="flex bg-blue-400 border-2 border-black text-lg rounded-full w-[500px] h-[50px] mt-[50px] items-center justify-center hover:bg-black hover:text-white"
                    >
                        Login
                    </button>

                    <p className="mt-4 text-center">
                        Create a new account{" "}
                        <Link
                            to="/doner"
                            className="text-red-500 text-xl hover:text-blue-300 hover:underline"
                        >
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Admin;
