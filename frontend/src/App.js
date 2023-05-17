import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat/login" element={<Login />} />
        <Route path="/chat/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
