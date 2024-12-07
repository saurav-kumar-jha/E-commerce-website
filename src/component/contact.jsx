import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-[#a1b7c4d2] p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-purple-600 mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name:-</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"required/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email:-</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"required/>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">Message:-</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" rows="4" required/></div>

          <div className="flex justify-between">
            <button type="submit" className="w-[45%] bg-purple-600 text-white p-3 font-medium rounded-md hover:bg-purple-700 focus:outline-none">Submit</button>
            <button type="button" onClick={handleReset} className="w-[45%] bg-gray-300 text-gray-700 p-3 font-medium rounded-md hover:bg-gray-400 focus:outline-none">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
