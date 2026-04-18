import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CourseList from "./pages/CourseList";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;