export default function PrivacyPolicyPage() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert text-gray-400 space-y-6 leading-relaxed">
        <p>
          Your privacy is important to us. This policy outlines how Marcos
          Hurtado / Boerne Fitness collects, uses, and protects your personal
          information.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">
          Information We Collect
        </h2>
        <p>
          We collect information you provide directly, such as your name, email
          address, phone number, and fitness goals when you submit a form on
          this site.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">
          How We Use Your Information
        </h2>
        <p>
          Your information is used solely to respond to your inquiries, provide
          coaching services, and communicate with you about your program. We do
          not sell or share your information with third parties.
        </p>
        <h2 className="text-white text-xl font-bold mt-8">Contact</h2>
        <p>
          If you have any questions about this policy, reach out via Instagram{" "}
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
