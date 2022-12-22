import React from "react";

import { Routes, Route } from "react-router-dom";

import { Authentication, Chat } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Authentication />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default Routers;
