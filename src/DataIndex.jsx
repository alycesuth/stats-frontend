export function DataIndex() {
  const topSongs = [
    { title: "Window In The Skies", artist: "U2" },
    { title: "Girl Anachronism", artist: "The Dresden Dolls" },
    { title: "Talk Tonight", artist: "Oasis" },
    { title: "Dammit", artist: "Blink-182" },
    { title: "Dig Up Her Bones", artist: "Misfits" },
    { title: "Reservoir", artist: "PUP" },
    { title: "5 to 9", artist: "FIDLAR" },
    { title: "Tournament Of Hearts", artist: "The Weakerthans" },
    { title: "She's Leaving You", artist: "MJ Lenderman" },
    { title: "Abra Cadaver", artist: "The Hives" },
  ];

  const topArtists = [
    "Modern Baseball",
    "The Weakerthans",
    "My Chemical Romance",
    "PUP",
    "Descendents",
    "MJ Lenderman",
    "Misfits",
    "The Front Bottoms",
    "Mindless Self Indulgence",
    "Jeff Rosenstock",
  ];

  return (
    <div className="h-screen w-screen bg-[#0b1120] text-white flex flex-col items-center pt-10 px-4">
      <div className="mb-4">
        <div className="bg-[#1c1f2e] border border-red-500 rounded-md px-3 py-1 text-sm text-gray-300 shadow mb-6">
          You're logged in through Spotify
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Top Songs */}
        <div className="bg-[#1c1f2e] border border-gray-700 rounded-xl p-6 w-80">
          <h2 className="text-2xl font-semibold mb-4 text-red-300">Top Songs</h2>
          <ul className="text-left space-y-2">
            {topSongs.map((song, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-medium text-white">
                  {index + 1}. {song.title}
                </span>{" "}
                — {song.artist}
              </li>
            ))}
          </ul>
        </div>

        {/* Top Artists */}
        <div className="bg-[#1c1f2e] border border-gray-700 rounded-xl p-6 w-80">
          <h2 className="text-2xl font-semibold mb-4 text-red-300">Top Artists</h2>
          <ul className="text-left space-y-2">
            {topArtists.map((artist, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-medium text-white">
                  {index + 1}. {artist}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
