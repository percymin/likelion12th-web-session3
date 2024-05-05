import { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(id, password);
  };

  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={handleLogin}>
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login_btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
