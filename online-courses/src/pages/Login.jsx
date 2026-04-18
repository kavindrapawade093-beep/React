import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem("student"));

    if (stored?.email === data.email && stored?.password === data.password) {
      alert("Login Success");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setData({...data,password:e.target.value})}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;