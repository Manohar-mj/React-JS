import React, { useState} from "react";

function App() {
  const [user, setCount] = useState("");

  const handler= e =>{
    setCount(e.target.value)
  }

  return (
    <div>
     <center>
       <input type="text" placeholder="username"
       value={user}
       name="user"
       onChange={handler}/>
       <br />

       {user}
       </center> 
    </div>
  );
}

export default App;
