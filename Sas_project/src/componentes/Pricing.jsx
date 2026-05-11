export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "$19",
      features: ["3 Projects", "Analytics", "Email Support"],
    },
    {
      title: "Pro",
      price: "$49",
      features: ["Unlimited Projects", "AI Insights", "Priority Support"],
      featured: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      features: ["Dedicated Manager", "Custom APIs", "24/7 Support"],
    },
  ];

  return (
    <section id="pricing" className="relative z-10 px-8 lg:px-20 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Flexible Pricing
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 border backdrop-blur-xl transition hover:-translate-y-2 ${
              plan.featured
                ? "border-violet-500 bg-violet-500/10 shadow-2xl shadow-violet-500/20"
                : "border-white/10 bg-[#0d1328]/80"
            }`}
          >
            <h3 className="text-3xl font-bold">{plan.title}</h3>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-6xl font-black">{plan.price}</span>
              <span className="text-gray-400 mb-2">/month</span>
            </div>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  ✔ {feature}
                </div>
              ))}
            </div>

            <button className="w-full mt-10 py-4 rounded-2xl bg-violet-500 hover:bg-violet-600 transition font-semibold">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}