"use client";
// import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="relative z-0 bg-primary ">
      <div
        className="bg-hero-pattern bg-cover bg-no-repeat bg-center "
        // style={{ backgroundImage: "/../public/images/black.jpeg" }}
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <Experience />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default App;
