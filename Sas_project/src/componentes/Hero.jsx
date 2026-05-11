import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const stats = [
    { label: "Active Users", value: "120K+" },
    { label: "Projects", value: "89K+" },
    { label: "Teams", value: "32K+" },
    { label: "Countries", value: "48+" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-8 lg:px-20 pt-24 pb-24 grid lg:grid-cols-2 gap-20 items-center"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6 backdrop-blur-xl">
          ✨ Next Generation SaaS Platform
        </div>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
          Build Faster.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Scale Smarter.
          </span>
        </h1>

        <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
          Powerful analytics, AI insights, and modern workflows built for
          startups and growing teams.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">
          <button className="px-8 py-4 rounded-2xl bg-violet-500 hover:bg-violet-600 transition font-semibold shadow-2xl shadow-violet-500/30">
            Start Free Trial
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold backdrop-blur-xl">
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#0d1328]/80 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <DashboardPreview />
    </motion.section>
  );
}