export default function Navebar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-20 py-6 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
      <h1 className="text-2xl font-black tracking-wide">
        Dev<span className="text-violet-400">Flow</span>
      </h1>

      <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
        <a href="#features" className="hover:text-white transition">
          Features
        </a>

        <a href="#pricing" className="hover:text-white transition">
          Pricing
        </a>

        <a href="#testimonials" className="hover:text-white transition">
          Testimonials
        </a>
      </div>

      <button className="px-5 py-2 rounded-full bg-violet-500 hover:bg-violet-600 transition font-medium shadow-lg shadow-violet-500/20">
        Get Started
      </button>
    </nav>
  );
}
