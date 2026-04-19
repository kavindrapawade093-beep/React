import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import ColorPage from "./pages/ColorPage";
import CounterPage from "./pages/CounterPage";
import TablePage from "./pages/TablePage";
import PasswordPage from "./pages/PasswordPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 👇 Layout Route */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="color" element={<ColorPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="password" element={<PasswordPage />} />
          <Route path="login" element={<LoginPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
