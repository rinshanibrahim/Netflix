import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InnerPage from "./pages/InnerPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/InnerPage" element={<InnerPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
