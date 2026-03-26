"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export function BackgroundBeamsDemo() {
  // ✅ Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error sending message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto px-4 w-full relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative">
          BE FIRST. BE EXCLUSIVE.
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto mt-4 text-center text-lg z-10 relative">
          AvatarLuxe is redefining personal identity in the digital realm. Join
          the waitlist for early access to the most advanced, AI-powered avatar
          experience.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto mt-8 bg-black rounded-xl shadow-lg"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full mt-6 bg-black placeholder:text-gray-600 px-4 py-3 text-white transition-all duration-300"
            required
          />

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="you@avatarluxe.ai"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full mt-6 bg-black placeholder:text-gray-600 px-4 py-3 text-white transition-all duration-300"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full mt-6 bg-black placeholder:text-gray-600 px-4 py-3 text-white transition-all duration-300"
              required
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full mt-6 bg-black placeholder:text-gray-600 px-4 py-3 text-white transition-all duration-300"
            required
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-[#D9AE69] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00e6bd] transition-all duration-300"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Background Effect */}
      <BackgroundBeams />
    </div>
  );
}