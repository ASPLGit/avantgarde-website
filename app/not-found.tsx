import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero-section-background.webp" 
        alt="Beach background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <h1 className="
          text-white
          text-6xl sm:text-7xl lg:text-9xl
          font-extrabold
          tracking-tight
        ">
          404
        </h1>

        <h2 className="
          mt-6
          text-2xl sm:text-3xl lg:text-4xl
          font-semibold
          text-white
        ">
          Page Not Found
        </h2>

        <p className="
          mt-6
          text-white/80
          text-base sm:text-lg
          max-w-xl mx-auto
          leading-relaxed
        ">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back to safety.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-full
              bg-white text-black
              text-sm sm:text-base
              font-medium
              transition-all duration-300
              hover:bg-gray-200 hover:scale-105
            "
          >
            Back to Homepage
          </Link>
        </div>

      </div>
    </section>
  );
}
