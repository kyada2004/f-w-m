import React, { useState } from "react";
import bg from "../img/background.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

function Doner() {
  

  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setFile(fileUrl);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !repeatPassword) {
        setMessage("Please fill all the fields.");
        return;
    }

    if (password !== repeatPassword) {
        setMessage("Passwords do not match.");
        return;
    }

    const donerData = {
        name,
        email,
        phone,
        password,
        image: file,
    };

    try {
        const response = await fetch('http://localhost:3000/api/doner/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(donerData),
        });

        if (response.ok) {
            setMessage("Registration successful!");
            navigate("/doner/donernavabar/donardashboard");
        } else {
            const errorData = await response.json();
            setMessage(errorData.error || "Registration failed.");
        }
    } catch (error) {
        setMessage("An error occurred. Please try again.");
    }
};

  return (
    <div>
      <Navbar />
      <div>
        <div
          className="w-full h-auto flex justify-center items-center px-[2%] py-[2%] bg-orange-200"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <form
            action=""
            className="border-4 p-[20px] m-[20px] border-black border-black-500/50"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row gap-3">
              <h2>Add Image:</h2>
              <input type="file" onChange={handleChange} />
              {file && (
                <img
                  src={file}
                  className="w-[75px] h-[75px] rounded-full border-4 border-black"
                  alt="Preview"
                />
              )}
            </div>

            <label className="text-lg text-black decoration-solid flex m-[5px]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:p-5 text-black"
            />

            <label className="text-lg text-black decoration-solid flex m-[5px]">
              Gmail
            </label>
            <input
              type="email"
              placeholder="Enter Gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:p-5 text-black"
            />

            <label className="text-lg text-black decoration-solid flex m-[5px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:p-5 text-black"
            />

            <label className="text-lg text-black decoration-solid flex m-[5px]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:p-5 text-black"
            />

            <label className="text-lg text-black decoration-solid flex m-[5px]">
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-[500px] h-[50px] border-2 border-black rounded-full bg-white placeholder:p-5 text-black"
            />

            {message && (
              <p className="text-red-500 text-lg mt-4">{message}</p>
            )}

            <Link
              to="#"
              onClick={handleSubmit}
              className="flex bg-blue-400 border-2 border-black text-lg rounded-full w-[500px] h-[50px] mt-[50px] items-center justify-center hover:bg-black hover:text-white"
            >
              Submit
            </Link>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/admin" className="text-red-500 text-xl hover:text-blue-300 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Doner;
