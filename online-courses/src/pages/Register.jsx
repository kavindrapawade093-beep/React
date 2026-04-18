import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("student", JSON.stringify(data));
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e)=>setData({...data,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setData({...data,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setData({...data,password:e.target.value})}/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;