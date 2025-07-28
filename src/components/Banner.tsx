import React, { useState } from "react";

const Banner = () => {
  const [color, setColor] = useState("orange");

  return (
    <div style={{ padding: "1rem", background: color }}>
      <button onClick={() => setColor(color === "orange" ? "skyblue" : "orange")}>
        Change Banner Color
      </button>
      <p>This is the Banner component with dynamic color.</p>
    </div>
  );
};

export default Banner;
