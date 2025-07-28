import React, { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");

  return (
    <main>
      <h1>Contact Page</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
      <p>Email typed: {email}</p>
    </main>
  );
};

export default ContactPage;
