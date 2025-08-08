import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HeaderMenu from "./components/HeaderMenu";
import { Games } from "./pages/Games";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderMenu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </HeaderMenu>
      </BrowserRouter>
    </>
  );
}

export default App;
