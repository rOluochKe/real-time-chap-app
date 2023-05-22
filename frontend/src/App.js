import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";

import Login from "./components/Login";
import Register from "./components/Register";
import Messenger from "./components/Messenger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat/login" element={<Login />} />
        <Route path="/chat/register" element={<Register />} />
        <Route path="/" element={ <ProtectRoute> <Messenger /> </ProtectRoute> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
