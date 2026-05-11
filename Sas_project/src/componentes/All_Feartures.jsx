import { motion } from "framer-motion";

export default function All_Features() {
  const features = [
    "AI Analytics",
    "Cloud Sync",
    "Real-time Collaboration",
    "Automation",
    "Advanced Security",
    "Custom Dashboards",
  ];

  return (
    <section id="features" className="relative z-10 px-8 lg:px-20 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Powerful Features
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          Everything you need to scale your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="p-8 rounded-3xl border border-white/10 bg-[#0d1328]/80 backdrop-blur-xl hover:-translate-y-2 transition duration-300 hover:border-violet-500/40"
          >
            <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold">{feature}</h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Premium modern tools designed for modern teams and startups.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}