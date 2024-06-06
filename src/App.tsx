import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import NotFound from "./pages/404.tsx";
import "./styles/universal.scss"

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}