"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need a gym membership to train with you?",
    answer:
      "No gym required. All programs are designed to be done at home or wherever you have space. I specialize in training people who work from home and prefer flexible, location-independent workouts.",
  },
  {
    question: "How does online coaching work?",
    answer:
      "After booking, I'll assess your goals, schedule, and current fitness level. I'll then build a custom program and deliver it through the coaching platform. We'll check in regularly via messaging or video calls depending on your plan.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "It depends on your program. Many clients start with just bodyweight. As you progress, minimal equipment like resistance bands or dumbbells can be added. I'll let you know exactly what you need before we start.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most clients notice changes in energy and strength within 2–4 weeks. Visible body composition changes typically show up in 4–8 weeks with consistency. Results depend on your commitment to training and nutrition.",
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Yes. All plans are month-to-month with no long-term contracts. You can cancel at any time before your next billing cycle.",
  },
  {
    question: "What if I'm a complete beginner?",
    answer:
      "Beginners are welcome and common in my programs. I break everything down step by step and build progressively so you're never overwhelmed. The most important thing is showing up consistently.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way is to book a free trial class or fill out the contact form on the Book Now page. I'll reach out within 25 hours to answer your questions and get you set up.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors">
          {question}
        </span>
        <span
          className={`text-orange-500 text-2xl ml-4 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-gray-400 leading-relaxed pb-6">{answer}</p>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
          FAQ
        </p>
        <h1 className="text-5xl font-black text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Have questions? These are the ones I hear most often.
        </p>
      </section>

      {/* FAQ List */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </>
  );
}
