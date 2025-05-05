import { useState, useEffect } from "react";
import axios from "axios";

export function DataIndex() {
  const [topArtists, setTopArtists] = useState([]);

  const [topTracks, setTopTracks] = useState([]);

  const handleTopArtists = () => {
    axios.get("http://localhost:3000/spotify/top_artists.json").then((response) => {
      console.log(response.data);
      setTopArtists(response.data);
    });
  };

  const handleTopTracks = () => {
    axios.get("http://localhost:3000/spotify/top_tracks.json").then((response) => {
      console.log(response.data);
      setTopTracks(response.data);
    });
  };

  useEffect(handleTopArtists, []);
  useEffect(handleTopTracks, []);

  return (
    <div className="min-h-screen w-screen bg-[#0b1120] text-white flex flex-col items-center pt-10 px-4">
      <div className="mb-4">
        <div className="bg-[#1c1f2e] border border-red-500 rounded-md px-4 py-2 text-lg text-gray-300 shadow mb-6">
          You're logged in through Spotify
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="bg-[#1c1f2e] border border-gray-700 rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-red-300">Top Songs</h2>
          <ul className="text-left space-y-3 text-lg">
            {topTracks.map((track, index) => (
              <li key={track.id || index} className="text-gray-300">
                <span className="font-semibold text-white">
                  {index + 1}. {track.name}
                </span>{" "}
                — {track.artists?.[0]?.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#1c1f2e] border border-gray-700 rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-red-300">Top Artists</h2>
          <ul className="text-left space-y-3 text-lg">
            {topArtists.map((artist, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-semibold text-white">
                  {index + 1}. {artist.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
