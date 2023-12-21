import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoPage } from "./pages/TodoPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route element={<TodoPage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
