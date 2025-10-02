import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import NotFound from "./pages/404.tsx";
import "./styles/universal.scss"
import Resume from "./pages/Resume.tsx";

export default function App() {
    const helmetContext = {};
    return (
        <HelmetProvider context={helmetContext}>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/" element={<Portfolio />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </HelmetProvider>
    );
}