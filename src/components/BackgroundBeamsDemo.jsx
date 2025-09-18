"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
        <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-xxl mx-auto px-2">
                <h2 className="text-4xl md:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 z-10 relative">
                BE FIRST. BE EXCLUSIVE.
                </h2>
                
                <p className="text-gray-400 max-w-xl mx-auto mt-4 text-center text-l z-10 relative">
                AvatarLuxe is redefining personal identity in the digital realm. Join the waitlist for early access to the most advanced, AI-powered avatar experience.
                </p>
              <form className="max-w-3xl mx-auto bg-blackrounded-xl shadow-lg">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full z-10 mt-6 bg-black placeholder:text-gray-600 px-4 py-2 transition-all duration-300"
                />

                {/* Email + Phone side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="you@avatarluxe.ai"
                    className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full z-10 mt-6 bg-black placeholder:text-gray-600 px-4 py-2 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full z-10 mt-6 bg-black placeholder:text-gray-600 px-4 py-2 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="rounded-lg border border-gray-800 focus:ring-2 focus:ring-[#00FFD1] w-full z-10 mt-6 bg-black placeholder:text-gray-600 px-4 py-2 transition-all duration-300"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-[#D9AE69] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#00e6bd] transition-all duration-300"
                >
                  Submit
                </button>
              </form>

            </div>
      <BackgroundBeams />
    </div>
  );
}
