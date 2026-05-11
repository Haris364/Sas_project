export default function CTA() {
  return (
    <section className="relative z-10 px-8 lg:px-20 pb-24">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-[#161b33] to-[#0f172a] backdrop-blur-2xl p-12 lg:p-20 text-center shadow-2xl shadow-violet-500/10">
        <h2 className="text-4xl lg:text-6xl font-black leading-tight">
          Ready to Build
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Something Amazing?
          </span>
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
          Experience the future of modern SaaS platforms.
        </p>

        <button className="mt-10 px-8 py-4 rounded-2xl bg-violet-500 hover:bg-violet-600 transition font-semibold shadow-xl shadow-violet-500/20">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
