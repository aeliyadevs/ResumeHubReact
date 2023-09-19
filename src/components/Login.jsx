import axios from "axios";
import "../assets/scss/Login.scss";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LoginAttempt(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    axios
      .get("https://localhost:7244/api/login", {
        headers: {
          Authorization: "authorize",
          Email: email,
          Password: password,
        },
      })
      .then((res) => {
        console.log("Logged in successfully.");
        Cookies.set("userId", res.data.userId);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log("Login failed with error. ".err);
      });
  }
  return (
    <div className="form-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form method="POST" action="" onSubmit={LoginAttempt}>
          <div className="user-box">
            <input
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          {/* <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button> */}
          <div className="d-flex justify-content-center">
            <a href="" onClick={LoginAttempt}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
