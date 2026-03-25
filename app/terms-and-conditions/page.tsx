export default function TermsPage() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-black text-white mb-8">
        Terms &amp; Conditions
      </h1>
      <div className="text-gray-400 space-y-6 leading-relaxed">
        <p>
          By using this website or enrolling in a training program with Marcos
          Hurtado / Boerne Fitness, you agree to the following terms.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">Services</h2>
        <p>
          All coaching services are provided online. Programs are personalized
          and may be updated over time based on your progress and feedback.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">
          Payments &amp; Cancellations
        </h2>
        <p>
          Memberships are billed monthly. You may cancel at any time before
          your next billing date. No refunds are issued for the current billing
          period.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">
          Health &amp; Liability
        </h2>
        <p>
          You acknowledge that physical exercise carries inherent risks. Please
          consult a physician before beginning any fitness program. Marcos
          Hurtado is not liable for any injury resulting from following the
          program.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">Contact</h2>
        <p>
          Questions? Reach out via Instagram{" "}
          <a
            href="https://instagram.com/marcosonlinefit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400"
          >
            @marcosonlinefit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
