import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Technologies from "./Components/Technologies";
import Resume from "./Components/Resume";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Portfolio />} />
                <Route path="/technologies" element={<Technologies />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;
