"use client";

import SectionLayout from "@/app/components/SectionLayout";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BookForm() {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCode, setSelectedCode] = useState("+1");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data
          .map((c: any) => {
            const root = c.idd?.root || "";
            const suffix = c.idd?.suffixes?.[0] || "";
            return {
              name: c.name.common,
              code: root + suffix,
            };
          })
          .filter((c: any) => c.code)
          .sort((a: any, b: any) => a.name.localeCompare(b.name));

        setCountries(formatted);
      });
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fullPhone = selectedCode + formData.phone;

      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          age: formData.age,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Submitted Successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
        });
      } else {
        toast.error("Failed ❌");
      }
    } catch (err) {
      toast.error("Error ❌");
    }

    setLoading(false);
  };

  return (
    <SectionLayout>
      <form
        onSubmit={handleSubmit}
        data-aos="zoom-in-down"
        className="px-6 py-7 border-3 border-[#098A46] flex lg:flex-row flex-col gap-4"
      >
        {/* NAME */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name *"
          required
          className="w-1/5 py-5 px-4 shadow-md border-3 border-gray-300"
        />

        {/* EMAIL */}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email *"
          required
          className="w-1/5 py-5 px-4 shadow-md border-3 border-gray-300"
        />

        {/* PHONE */}
        <div className="relative w-1/5">
          <select
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
            className="appearance-none bg-[#E6E6E6] px-2 w-14 py-[5.5px] absolute left-3 top-5 text-[#098A46] text-[14px] font-semibold shadow-lg outline-none cursor-pointer"
          >
            {countries.map((c, i) => (
              <option key={i} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            required
            className="w-full py-5 px-4 pl-20 shadow-md border-3 border-gray-300"
          />
        </div>

        {/* AGE */}
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age *"
          required
          className="w-1/5 py-5 px-4 shadow-md border-3 border-gray-300"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-1/5 py-[19px] flex justify-center items-center gap-2 text-white font-semibold text-xl
          ${loading ? "bg-gray-400" : "bg-[#098A46] hover:bg-[#7AC043]"}`}
        >
          {loading && (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Submitting..." : "Book Now"}
        </button>
      </form>
    </SectionLayout>
  );
}