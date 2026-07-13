"use client";

import { useState } from "react";

export default function JoinMeeting() {
  const [meetingId, setMeetingId] = useState("");

  const handleJoin = () => {
    console.log("Meeting ID:", meetingId);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-semibold text-[#1F2937]">
        Join a Meeting
      </h2>

      <label className="mb-2 block text-sm font-medium text-gray-700">
        Meeting ID
      </label>

      <input
        type="text"
        placeholder="Enter Meeting ID"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
        className="mb-6 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-[#5B5FC7] focus:ring-4 focus:ring-[#EEF0FF]"
      />

      <button
        onClick={handleJoin}
        className="w-full rounded-xl bg-[#5B5FC7] py-3 font-semibold text-white transition-all duration-200 hover:bg-[#4F52B2]"
      >
        Join
      </button>
    </div>
  );
}