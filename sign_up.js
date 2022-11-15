import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: ""
  });

  const { username, email, password, repassword } = data;
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === repassword) {
      console.log(data);
    } else {
      alert("Wrong password");
      console.log("Password not matched! please check");
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="usename"
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="password"
          />

          <input
            type="password"
            name="repassword"
            value={repassword}
            onChange={onChange}
            placeholder="re enter password"
          />

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}

export default App;
