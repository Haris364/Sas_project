import Hero from "../componentes/Hero";
import Pricing from "../componentes/Pricing";
import Testimonials from "../componentes/Testimonials";
import CTA from "../componentes/CTA";
import Footer from "../componentes/Footer";
import Navebar from "../componentes/Navebar";
import All_Features from "../componentes/All_Feartures";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden selection:bg-violet-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.15),transparent_35%)]"></div>

      <Navebar/>
      <Hero />
      <All_Features/>
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
