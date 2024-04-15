import './App.css';

import About from "./Components/About";
import {useEffect, useState} from "react";
import JsonData from "./data/resumeData.json";
import SmoothScroll from "smooth-scroll";
import {Header} from "./Components/Header";
import {Navigation} from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Portfolio data={landingPageData.Portfolio} />
            <Footer></Footer>
        </div>
    );
};

export default App;

