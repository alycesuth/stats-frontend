export function Footer() {
  return (
    <footer className="w-full mt-16 bg-[#1c1f2e] border-t border-gray-700 text-gray-400">
      <div className="max-w-screen-lg mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm md:text-base text-red-400 font-medium tracking-wide">
          © {new Date().getFullYear()} DistortionDiary
        </div>

        <div className="flex gap-6 mt-4 md:mt-0 text-sm md:text-base">
          <a href="#" className="hover:text-red-500 transition">
            About
          </a>
          <a href="#" className="hover:text-red-500 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-red-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
