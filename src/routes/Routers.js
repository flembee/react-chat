import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { Chat } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Chat />} />
      <Route path="/rooms/:roomId" element={<Chat />} />
    </Routes>
  );
};

export default Routers;
