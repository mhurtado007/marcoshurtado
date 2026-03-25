import Link from "next/link";

const plans = [
  {
    name: "Plan 1",
    price: "$40",
    period: "/mo",
    description: "Perfect for getting started with guided online training.",
    features: [
      "Custom workout plan",
      "Weekly check-ins",
      "Exercise video library",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Plan 2",
    price: "$70",
    period: "/mo",
    description: "Most popular. More accountability and personalized coaching.",
    features: [
      "Everything in Plan 1",
      "Nutrition guidance",
      "Bi-weekly video calls",
      "Priority messaging",
      "Progress tracking",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Plan 3",
    price: "$100",
    period: "/mo",
    description: "Full-service coaching for maximum results and accountability.",
    features: [
      "Everything in Plan 2",
      "Full meal planning",
      "Weekly video calls",
      "24/7 direct access",
      "Monthly performance review",
      "Supplement guidance",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
          Membership
        </p>
        <h1 className="text-5xl font-black text-white mb-4">Simple Pricing</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          No hidden fees. No contracts. Cancel any time. Pick the plan that fits
          your goals.
        </p>
      </section>

      {/* Plans */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.highlighted
                  ? "bg-orange-500 border-orange-500"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="mb-8">
                <p
                  className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                    plan.highlighted ? "text-orange-100" : "text-orange-500"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg mb-2 ${
                      plan.highlighted ? "text-orange-100" : "text-gray-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={plan.highlighted ? "text-orange-100" : "text-gray-400"}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`text-lg ${
                        plan.highlighted ? "text-white" : "text-orange-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-white" : "text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book-now"
                className={`block text-center font-bold py-3 rounded-md transition-colors ${
                  plan.highlighted
                    ? "bg-white text-orange-500 hover:bg-orange-50"
                    : "bg-orange-500 hover:bg-orange-400 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Not sure which plan is right for you?{" "}
          <Link
            href="/free-trial"
            className="text-orange-500 hover:text-orange-400"
          >
            Try a free class first.
          </Link>
        </p>
      </section>
    </>
  );
}
