import React, { useEffect } from "react";

const FloatingHearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.className = "fixed text-2xl animate-float pointer-events-none";
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.top = "100%";
      heart.style.zIndex = 0; // Behind the main content
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    };

    const interval = setInterval(createHeart, 600);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FloatingHearts;
