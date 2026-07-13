"use client";

import { useState } from "react";

export default function CreateMeeting() {
  const [hostName, setHostName] = useState("");

  const handleContinue = () => {
    console.log("Host Name:", hostName);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl border border-gray-100">
      <h2 className="mb-6 text-3xl font-semibold text-[#1F2937]">
        Create a New Meeting
      </h2>

      <label className="mb-2 block text-sm font-medium text-gray-700">
        Host Name
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
        className="mb-6 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-[#5B5FC7] focus:ring-4 focus:ring-[#EEF0FF]"
      />

      <button
        onClick={handleContinue}
        className="w-full rounded-xl bg-[#5B5FC7] py-3 font-semibold text-white transition-all duration-200 hover:bg-[#4F52B2]"
      >
        Continue
      </button>
    </div>
  );
}