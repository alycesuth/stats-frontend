export function Header() {
  return (
    <header className="w-full bg-[#1c1f2e] border-b border-gray-700 shadow-md">
      <div className="relative w-full px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl md:text-2xl font-bold text-red-500 tracking-wide">DistortionDiary</div>

        {/* Center: Title - absolutely centered in parent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-semibold text-red-400 tracking-wide drop-shadow text-center whitespace-nowrap">
          Your Statistics
        </div>

        {/* Right: Logout and Avatar */}
        <div className="flex items-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white text-md px-4 py-2 rounded-lg shadow">Logout</button>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-400">
            <img
              src="https://i.pinimg.com/736x/ac/02/7b/ac027bd6bac21f1e8fc4c18ee53054d5.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
