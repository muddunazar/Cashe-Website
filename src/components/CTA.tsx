import React, { useState } from "react";

const CTA = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ padding: "1rem", border: "1px dashed #333" }}>
      <button onClick={() => setClicked(true)}>
        Click Me
      </button>
      {clicked && <p>You clicked the CTA button!</p>}
      <p>sadas</p>
    </div>
  );
};

export default CTA;
