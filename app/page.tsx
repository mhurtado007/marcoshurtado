import Image from "next/image";
import FadeIn from "./components/FadeIn";
import ContactForm from "./components/ContactForm";

const testimonials = [
  {
    name: "Renae R.",
    stars: 5,
    date: "Sep 3, 2020",
    text: "Marcos has been my personal trainer for over a year now and he is an amazing trainer and a great person as well. I highly recommend him to anyone looking to get impressive results!",
  },
  {
    name: "Jing C.",
    stars: 4,
    date: "Feb 10, 2020",
    text: "Marcos has been a phenomenal help with my exercise routine. Prior to working with Marcos I was just doing cardio and not really strength training. Marcos helped me work on a program that is helping me build strength and endurance. I would highly recommend him as a trainer.",
  },
  {
    name: "Nathan P.",
    stars: 5,
    date: "November '16",
    text: "It has been great working with Marcos! I can honestly say that following his program has made a big difference. By making a few small changes to my diet and by staying consistent with his program, I've made great progress! Before I started with Marcos, I was unable to do a single push-up — he has completely transformed my life.",
  },
  {
    name: "Dan P.",
    stars: 5,
    date: "April 1",
    text: "I've been working with Marcos for about a year and a half now and have really enjoyed it. He is great at keeping his clients motivated with training and boxing/Muay Thai classes. And he's also great at keeping me accountable and helping me enjoy my fitness journey.",
  },
  {
    name: "Vivian A.",
    stars: 5,
    date: "April 1",
    text: "I've had an amazing experience working with Marcos! He really listened to what areas I wanted to work on while also making sure I was getting a full workout. I would definitely recommend training with Marcos if you need a trainer.",
  },
];

const photos = [
  "/photos/workout-1.jpg",
  "/photos/workout-2.jpg",
  "/photos/workout-3.jpg",
  "/photos/workout-4.jpg",
  "/photos/workout-5.jpg",
  "/photos/workout-6.jpg",
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/photos/hero.jpg"
            alt="Personal Training"
            fill
            className="object-cover opacity-90"
            priority
            unoptimized
          />
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center sm:left-auto sm:right-16 sm:bottom-16 sm:text-right">
          <p className="text-white leading-snug [font-family:var(--font-anton)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.5)]" style={{ fontSize: "clamp(3.12rem, 12.48vw, 4.815rem)" }}>
            Personal<br className="sm:hidden" /> Training<br />anywhere!
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="bg-white py-20 px-8">
        <FadeIn>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-black text-black mb-8">
              Let&apos;s get fit today!
            </h2>
            <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
              <Image
                src="/photos/boxing.jpg"
                alt="Training session"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
        </FadeIn>
      </section>

      {/* ── REVIEW COLLAGE ── */}
      <section className="relative py-16 px-8" style={{ background: "linear-gradient(120deg, #e8c96a 0%, #f5e0a0 30%, #fdf3d0 60%, #ffffff 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-3 gap-3 sm:h-[calc(90vh-8rem)]">
          {[
            "/photos/review-1.png",
            "/photos/review-2.png",
            "/photos/review-3.png",
            "/photos/review-4.png",
            "/photos/review-5.png",
            "/photos/review-6.png",
            "/photos/review-7.png",
            "/photos/review-8.png",
            "/photos/review-9.png",
            "/photos/review-10.png",
            "/photos/review-11.png",
            "/photos/review-12.png",
          ].map((src, i) => (
            <FadeIn key={src} delay={i * 60}>
              <div className="overflow-hidden h-full">
                <Image src={src} alt="Review" width={400} height={500} className="w-full h-auto sm:h-full sm:object-contain" unoptimized />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── JOIN NOW + PHOTO STRIP ── */}
      <section className="bg-black">
        <FadeIn>
        <div className="flex justify-center py-10">
          <a
            href="https://buy.stripe.com/28ocQ5fFI3s9d4k5kk"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-[1.05rem] font-semibold px-[3.6rem] py-[0.9rem] rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Join Now!
          </a>
        </div>

        {/* photo grid: 2 cols mobile, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-6">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square bg-gray-900 overflow-hidden"
            >
              <Image
                src={src}
                alt={`Training photo ${i + 1}`}
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* spacer */}
        <div className="py-10" />
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-black border-t border-white/10 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-white font-black text-4xl tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "Impact, 'Arial Narrow', sans-serif" }}
          >
            CONTACT
          </h2>
          <a
            href="https://instagram.com/marcosonlinefit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
