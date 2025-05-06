import React, { useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SongDetails from "./SongDetails";
import Controls from "./Controls";
import useMusicStore from "../store/useMusicStore";

const MusicPlayer = () => {
  const { initAudio, musicLists, currentSongIndex } = useMusicStore();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      initAudio(audio);
      audio.src = musicLists[currentSongIndex].src; // Set the initial song
    }
  }, []);

  return (
    <div className="p-10 bg-blue-200 rounded-xl  w-80 opacity-85 ">
      {/* Top Header Section */}

      <SongDetails />
      <Controls />

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onEnded={() => useMusicStore.getState().nextSong()} // Auto play next song if ending
      />
    </div>
  );
};

export default MusicPlayer;
