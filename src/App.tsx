import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pag/Login";
import Register from "./pag/Cadastro";
import Home from "./pag/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
