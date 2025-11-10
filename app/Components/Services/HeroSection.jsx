'use client';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items- justify-center "
      style={{ backgroundImage: "url('/images/Frame 96.png') " } } 
    >
      <div className="absolute inset-0 bg-white/5"></div>

      <div className="relative text-center max-w-2xl p-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 ">
          Let's Make Your Vision a Reality
        </h1>
        <p className="mt-3 text-gray-700">
          Contact our team today to discuss your construction project
        </p>
        <button className="mt-56 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition">
          Get a Quote →
        </button>
      </div>
    </section>
  );
}
