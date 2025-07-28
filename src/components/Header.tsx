import React, { useState } from "react";

const Header = () => {
  const [showTitle, setShowTitle] = useState(true);

  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <button onClick={() => setShowTitle(!showTitle)}>
        Toggle Header Title
      </button>
      {showTitle && <h2>Welcome to Header Component</h2>}
    </header>
  );
};

export default Header;
