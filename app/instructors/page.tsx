import Link from "next/link";

export default function InstructorsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
          The Team
        </p>
        <h1 className="text-5xl font-black text-white">Meet Your Coaches</h1>
      </section>

      {/* Marcos */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-2xl aspect-[4/5] flex items-center justify-center">
            <p className="text-gray-600 text-sm">Photo coming soon</p>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white mb-2">
              Marcos Hurtado
            </h2>
            <p className="text-orange-500 font-semibold mb-6">
              Head Coach & Personal Trainer
            </p>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                With over a decade of experience in the fitness industry, Marcos
                specializes in online personal training and coaching for
                ambitious men and women — especially those who work from home.
              </p>
              <p>
                His approach is simple: remove the guesswork, build consistent
                habits, and deliver real results. Whether you&apos;re a complete
                beginner or looking to level up, Marcos designs a plan that fits
                your life.
              </p>
              <p>
                Originally from the San Francisco Bay Area, Marcos is now based
                in Boerne, Texas, and coaches clients nationwide.
              </p>
              <p>
                When he&apos;s not training clients, you&apos;ll find him deep in combat
                sports — Muay Thai, Boxing, and MMA — as well as traveling,
                dining, and spending time with family.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Online Coaching",
                "Muay Thai",
                "Boxing",
                "MMA",
                "Strength Training",
                "Weight Loss",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <Link
                href="/book-now"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-md transition-colors"
              >
                Book with Marcos
              </Link>
              <a
                href="https://instagram.com/marcosonlinefit"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-white text-white px-6 py-3 rounded-md transition-colors"
              >
                @marcosonlinefit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aliyah */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">
              Aliyah Williams
            </h2>
            <p className="text-orange-500 font-semibold mb-6">
              Core & Cardio Coach
            </p>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Aliyah specializes in core conditioning and cardiovascular
                training, helping clients build endurance, stability, and
                athletic performance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Core Training", "Cardio", "Endurance"].map((tag) => (
                <span
                  key={tag}
                  className="bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/book-now"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-md transition-colors"
              >
                Book with Aliyah
              </Link>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-2xl aspect-[4/5] flex items-center justify-center">
            <p className="text-gray-600 text-sm">Photo coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
}
