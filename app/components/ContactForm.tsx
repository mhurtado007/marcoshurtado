"use client";

import { useState } from "react";

const GOALS = [
  "Gain muscle",
  "Weight loss",
  "Fix posture",
  "Consistency",
  "Need help starting",
];

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [homeWorkout, setHomeWorkout] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [questions, setQuestions] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function toggleGoal(goal: string) {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, homeWorkout, goals, questions }),
    });

    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <p className="text-green-600 font-semibold text-sm py-8">
        Message sent! Marcos will be in touch shortly.
      </p>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Do you workout from home? <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={homeWorkout}
          onChange={(e) => setHomeWorkout(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2">
          Goals?
        </label>
        <div className="space-y-2">
          {GOALS.map((goal) => (
            <label
              key={goal}
              className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-black"
                checked={goals.includes(goal)}
                onChange={() => toggleGoal(goal)}
              />
              {goal}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Any questions you have for me?
        </label>
        <input
          type="text"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-black text-white text-sm font-semibold px-8 py-3 hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
