import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("student"));
    setUser(data);
  }, []);

  const update = () => {
    localStorage.setItem("student", JSON.stringify(user));
    alert("Updated");
  };

  const deleteUser = () => {
    localStorage.removeItem("student");
    alert("Deleted");
  };

  return (
    <div>
      <h2>Profile</h2>
      <input value={user?.name || ""} onChange={(e)=>setUser({...user,name:e.target.value})}/>
      <input value={user?.email || ""} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <button onClick={update}>Update</button>
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default Profile;