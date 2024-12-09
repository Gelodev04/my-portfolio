import React, { useState } from "react";
import "./App.css";

const Gradient = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate percentage position of the mouse
    const xPercent = ((clientX - left) / width) * 100;
    const yPercent = ((clientY - top) / height) * 100;

    setGradientPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div
      className="gradient-background"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #ff7eb3, #ff758c, #ff6b66)`,
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", marginTop: "40vh" }}>
        Mouse Move Gradient Background
      </h1>
    </div>
  );
};

export default Gradient;
