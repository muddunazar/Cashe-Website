import React, { useState } from "react";

const AboutPage = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>About Page</h1>
      <p>Click count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </main>
  );
};

export default AboutPage;
