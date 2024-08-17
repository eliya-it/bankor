import { useEffect, useState } from "react";

import "./assets/css/style.css";
import Layout from "./Components/Containers/Layout";
import Main from "./Components/Containers/Main";
import How from "./Components/Sections/How";
import Story from "./Components/Sections/Story";
import Pricing from "./Components/Sections/Pricing";
import Cities from "./Components/Sections/Cities";
import Cta from "./Components/Sections/Cta";
import Contact from "./Components/Sections/Contact";
import Process from "./Components/Sections/Process";
import Header from "./Components/UI/Header";
import logo from "./assets/img/logo.png";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) document.querySelector("body").style.overflowY = "hidden";
    else document.querySelector("body").style.overflowY = "visible";
    window.addEventListener("load", () => {
      setIsLoading(false);
      document.querySelector("body").style.overflowY = "visible";
    });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <div className="loader">
          <img src={logo} alt="" className="loader__logo" />
        </div>
      ) : null}
      <Header />
      <Main>
        {/* How */}
        <How />
        {/* Story */}
        <Story />
        {/* Pricing */}
        <Pricing />
        {/* Process */}
        <Process />
        {/* Cities */}
        <Cities />
        {/* CTA */}
        <Cta />
        {/* Contact */}
        <Contact />
      </Main>
    </Layout>
  );
}

export default App;
