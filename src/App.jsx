import React from "react";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";

const App = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 text-gray-400 bg-[url('https://i.pinimg.com/736x/f0/8f/50/f08f502a5946cc86d72079969d522df9.jpg')] bg-cover bg-center overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />
    </div>
  );
};

export default App;
//https://i.pinimg.com/736x/f0/8f/50/f08f502a5946cc86d72079969d522df9.jpg
