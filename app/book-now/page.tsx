"use client";

import { useState } from "react";

export default function BookNowPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [homeWorkout, setHomeWorkout] = useState("");
  const [goals, setGoals] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/book-now", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, homeWorkout, goals, message }),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
          Get Started
        </p>
        <h1 className="text-5xl font-black text-white mb-4">Book a Session</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Destroy your excuses and get on track today. Fill out the form below
          and Marcos will reach out within 25 hours.
        </p>
      </section>

      {/* Form */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          {status === "success" ? (
            <p className="text-green-400 font-semibold text-center text-lg py-8">
              Message sent! Marcos will respond within 25 hours.
            </p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="home_workout"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Do you work out at home?
                </label>
                <select
                  id="home_workout"
                  name="home_workout"
                  value={homeWorkout}
                  onChange={(e) => setHomeWorkout(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="" className="bg-[#1a1a1a]">
                    Select an option
                  </option>
                  <option value="yes" className="bg-[#1a1a1a]">
                    Yes
                  </option>
                  <option value="no" className="bg-[#1a1a1a]">
                    No
                  </option>
                  <option value="sometimes" className="bg-[#1a1a1a]">
                    Sometimes
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  What are your fitness goals?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  placeholder="Tell me what you want to achieve..."
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Anything else?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Questions, schedule constraints, injuries, etc."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-md text-lg transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <p className="text-gray-500 text-sm text-center mt-6">
            Marcos will respond within 25 hours.
          </p>
        </div>
      </section>
    </>
  );
}
