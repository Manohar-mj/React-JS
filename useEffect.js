import React, { useState , useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);


  useEffect(()=> console.log("clicked"),[count])
  return (
    <div>
      <p>you clicked it {count}</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
