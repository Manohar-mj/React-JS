import React, { useState } from "react";

function App() {
  const arr = ["react js", "Node js", "Express Js", "TypeScript"];

  return (
    <div>
      {arr.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </div>
  );
}
export default App;
