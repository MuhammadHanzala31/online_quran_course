"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Tajweed Course",
    enrollFor: "self",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted ");
  };

  return (
    <div className="flex justify-center items-center max-w-[400px] bg-gray-100 shadow-2xl shadow-amber-500">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Heading */}
        <p className="text-center text-sm font-semibold">Get Your Free</p>
        <h2 className="text-center text-2xl font-bold">
          <span className="text-green-600 text-3xl">07</span> Days Trial Now!
        </h2>
        <p className="text-center text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 mt-2">
          OR CLAIM 05% OFF ON YOUR FIRST PURCHASE
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name Here*"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-green-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Here*"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-green-600"
          />
          <input
            type="tel"
            name="phone"
            placeholder="📞 Enter Your Number Here*"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-green-600"
          />

          {/* Dropdown */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-green-600"
          >
            <option>Tajweed Course</option>
            <option>Quran Reading</option>
            <option>Hifz Program</option>
          </select>

          {/* Radio Buttons */}
          <div className="flex items-center gap-3 text-sm">
            <span>I Want To Enroll For?</span>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="enrollFor"
                value="self"
                checked={formData.enrollFor === "self"}
                onChange={handleChange}
              />
              My Self
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="enrollFor"
                value="child"
                checked={formData.enrollFor === "child"}
                onChange={handleChange}
              />
              My Child
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
          >
            Claim 7 Days Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
