import React from "react";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";

const App = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 text-gray-400 bg-[url('https://i.pinimg.com/736x/f0/8f/50/f08f502a5946cc86d72079969d522df9.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full  ">
        <h1 className="text-6xl font-semibold text-white px-14 pt-6 ">
          Back to the 2010s with <br /> Taylor Swift
        </h1>
        <p className="text-xl  font-mono text-white px-14 pt-4 max-w-2xl">
          A decade of love, heartbreak, and <br /> growing up — soundtracked by
          the <br /> voice that said it all. Let the <br /> memories play.
        </p>
      </div>
      <FloatingHearts />
      <MusicPlayer />
    </div>
  );
};

export default App;
//https://i.pinimg.com/736x/f0/8f/50/f08f502a5946cc86d72079969d522df9.jpg
