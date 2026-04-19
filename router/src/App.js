import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Edit from "./pages/Edit";

function App() {


  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Kavindra",
      email: "kavi@gmail.com",
      mobile: "1234567890",
      address: "Aambedhe",
    },
    {
      id: 2,
      name: "Kuldeep",
      email: "kuldeep@gmail.com",
      mobile: "0987654321",
      address: "Mumbai",
    },
    {
      id: 3,
      name: "Mark",
      email: "mark@gmail.com",
      mobile: "9807654321",
      address: "Pune",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Home gets users */}
          <Route index element={<Home users={users} />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          {/* Edit gets users + setUsers */}
          <Route
            path="edit/:id"
            element={<Edit users={users} setUsers={setUsers} />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
