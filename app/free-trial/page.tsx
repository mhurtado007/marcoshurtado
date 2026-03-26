"use client";

import { useState } from "react";

const classes = ["Yoga", "Boxing", "Running Club", "Pilates"];

export default function FreeTrialPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/free-trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, selectedClass }),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
          No Commitment
        </p>
        <h1 className="text-5xl font-black text-white mb-4">Free Trial Class</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Try before you commit. Sign up for a free class and experience the
          coaching firsthand.
        </p>
      </section>

      {/* Form */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          {status === "success" ? (
            <p className="text-green-400 font-semibold text-center text-lg py-8">
              You&apos;re signed up! Marcos will reach out to schedule your session.
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
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Phone <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="class"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Select a Class <span className="text-orange-500">*</span>
                </label>
                <select
                  id="class"
                  name="class"
                  required
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="" className="bg-[#1a1a1a]">
                    Choose a class
                  </option>
                  {classes.map((c) => (
                    <option key={c} value={c} className="bg-[#1a1a1a]">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-md text-lg transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Claim Free Trial"}
              </button>
            </form>
          )}

          <p className="text-gray-500 text-sm text-center mt-6">
            No credit card required. Marcos will reach out to schedule your session.
          </p>
        </div>
      </section>
    </>
  );
}
