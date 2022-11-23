import React from "react";

import { Routes, Route } from "react-router-dom";

import { Chat } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/rooms/:roomId" element={<Chat />} />
    </Routes>
  );
};

export default Routers;
