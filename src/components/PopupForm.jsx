"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function PopupForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ Ensure portal works
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ ESC close + lock background scroll
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  // ✅ Submit
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
        onClose();
      } else {
        alert("Error sending message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Center Wrapper */}
      <div className="flex min-h-full items-center justify-center p-4">
        
        {/* Modal */}
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 rounded-xl p-6 md:p-8 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl z-20"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="relative z-10">
            
            {/* Heading */}
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              Book Appointment
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6">
              
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full mt-3 bg-black border border-gray-800 px-4 py-3 text-white rounded-lg"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full mt-3 bg-black border border-gray-800 px-4 py-3 text-white rounded-lg"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full mt-3 bg-black border border-gray-800 px-4 py-3 text-white rounded-lg"
                  required
                />
              </div>

              <textarea
                placeholder="Message"
                rows="4"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full mt-3 bg-black border border-gray-800 px-4 py-3 text-white rounded-lg"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* BACKGROUND EFFECT (non-clickable) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <BackgroundBeams />
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}