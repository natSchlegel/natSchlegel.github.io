import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { AnimatePresence } from "framer-motion";
import { useOS } from "./Context";

import "./App.css";
import Curriculo from "./browser/Curriculo";
import Projects from "./browser/Projects";
import Education from "./text/Education";
import Experience from "./text/Experience";

import arrowForwardIos from "./assets/arrow_forward_ios.svg";
import arrowBackIos from "./assets/arrow_back_ios.svg";
import refresh from "./assets/refresh.svg";

function App() {
  const { windows, toggleWindow, text } = useOS();

  const openTab = (tab) => {
    if (tab === "curriculum") {
      toggleWindow("curriculum", true);
      toggleWindow("projects", false);
    } else {
      toggleWindow("projects", true);
      toggleWindow("curriculum", false);
    }
  };

  console.log("Estado das janelas:", windows);

  return (
    <>
      <BrowserView>
        <div className="container">
          <div className="container-big">
            <div className="container-big-div">
              <div className="container-big-div-div">
                <div className="container-big-div-div-circles-div">
                  <div className="circle-red"></div>
                  <div className="circle-yellow"></div>
                  <div className="circle-green"></div>
                </div>
                <div
                  className={`tab-1 ${windows.curriculum ? "active-tab" : "inactive-tab"}`}
                  onClick={() => openTab("curriculum")}
                >
                  {text.tabs.resume}
                </div>
                <div
                  className={`tab-2 ${windows.projects ? "active-tab" : "inactive-tab"}`}
                  onClick={() => openTab("projects")}
                >
                  {text.tabs.projects}
                </div>
              </div>
              <div className="url-div">
                <div className="url-div-div">
                  <img src={arrowBackIos} alt="Back" />
                  <img src={arrowForwardIos} alt="Forward" />
                  <img src={refresh} alt="Refresh" />
                  <span className="url-text">
                    {windows.curriculum
                      ? "https://natschlegel.github.io/curriculo"
                      : "https://natschlegel.github.io/projects"}
                  </span>
                </div>
              </div>
            </div>

            <div className="teste-2">
              {windows.curriculum && <Curriculo />}
              {windows.projects && <Projects />}
            </div>
          </div>

  <AnimatePresence>
  {windows.experience && (
    <Experience key="exp-window" />
  )}
  {windows.education && (
    <Education key="edu-window" />
  )}
</AnimatePresence>
        </div>
      </BrowserView>

      <MobileView>
        <div className="mobile-wrapper">
          <Curriculo />
          <AnimatePresence>
            {windows.experience && <Experience />}
            {windows.education && <Education />}
          </AnimatePresence>
        </div>
      </MobileView>
    </>
  );
}

export default App;