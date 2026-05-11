export default function Footer() {
  return (
    <footer className="relative z-10 px-8 lg:px-20 py-10 border-t border-white/10 flex flex-col lg:flex-row gap-5 items-center justify-between text-gray-400 text-sm">
      <p>© 2026 DevFlow. All rights reserved.</p>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition">
          Privacy
        </a>

        <a href="#" className="hover:text-white transition">
          Terms
        </a>

        <a href="#" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </footer>
  );
}