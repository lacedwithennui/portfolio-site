import {BrowserRouter, Route, Routes} from "react-router-dom";
import mainStyles from "./assets/styles/universal.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/404";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
