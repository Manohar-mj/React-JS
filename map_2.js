import React from "react";

function App() {
  const arr = [
    {
      id: 1,
      title: "React js"
    },
    {
      id: 2,
      title: "node js"
    },
    {
      id: 3,
      title: "Express js"
    }
  ];
  return (
    <div>
      {arr.map((v, i) => (
        <li key={v.id}>{v.title}</li>
      ))}
    </div>
  );
}
export default App;
