export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Startup Founder",
      message:
        "This platform completely transformed our workflow and productivity.",
    },
    {
      name: "Ali Khan",
      role: "Frontend Developer",
      message:
        "The design feels modern, smooth, and premium across all devices.",
    },
    {
      name: "Haris",
      role: "Backend Engineer",
      message:
        "Excellent experience with beautiful animations and performance.",
    },
  ];

  return (
    <section id="testimonials" className="relative z-10 px-8 lg:px-20 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold">
          What Clients Say
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl border border-white/10 bg-[#0d1328]/80 backdrop-blur-xl"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              “{item.message}”
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500"></div>

              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

