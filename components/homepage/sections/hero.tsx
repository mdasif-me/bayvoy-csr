import SearchForm from "./search";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-beach.jpg"
          alt="Beautiful tropical beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-16 px-4">
        <div className="max-w-full mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Discover Your Dream
              <span className="block mt-2 text-[#0ea5e9]">Destination</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              Book hotels, tours, and rent cars at the best prices.
              Start your adventure today!
            </p>
          </div>

          {/* Search Form */}
          <SearchForm />
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-white"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
