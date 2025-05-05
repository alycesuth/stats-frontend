import React from "react";

export function LoginPage() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/spotify";
  };

  return (
    <div className="h-screen w-screen bg-[#0b1120] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-red-400 drop-shadow">Login to Spotify</h1>

        <button
          onClick={handleLogin}
          className="bg-[#1DB954] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-[#1ed760] transition duration-200 shadow-md"
        >
          Sign in with Spotify
        </button>
      </div>
    </div>
  );
}
