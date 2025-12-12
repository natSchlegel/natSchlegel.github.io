import React, { useRef } from "react";
import { useOS } from "../Context";
import uk from "../assets/uk.svg";
import brazil from "../assets/brazil.svg";
import germany from "../assets/germany.svg";
import hireDE from "../assets/hirede.svg";
import hireEN from "../assets/hireen.svg";
import hirePT from "../assets/hirept.svg";
import { isMobile } from 'react-device-detect';
import Projects from "./Projects";

const Curriculo = () => {
  const { text, language, handleLanguageChange, toggleWindow } = useOS();
  const sectionRef = useRef(null);

  const hireImage = () => {
    if (language === "german") return hireDE;
    if (language === "portuguese") return hirePT;
    return hireEN;
  };

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openProjects = () => {
    toggleWindow("curriculum", false);
    toggleWindow("projects", true);
  };

  if (isMobile) {
    return (
      <div className="mobile-grid">
        <div className="mobile">
          <div className="subtitleMobile">Hello World</div>
          <span className="textMobile">{text.bio}</span>
          <div className="buttonMobile">
            <button onClick={scrollToSection}>{text.buttons.portfolio}</button>
            <button onClick={() => toggleWindow("experience", true)}>{text.buttons.experience}</button>
            <button onClick={() => toggleWindow("education", true)}>{text.buttons.education}</button>
          </div>
          <div className="textLanguagesMobile">
            <img src={germany} className="flag" onClick={() => changeLanguage("german")} alt="DE" />
            <img src={brazil} className="flag" onClick={() => changeLanguage("portuguese")} alt="PT" />
            <img src={uk} className="flag" onClick={() => changeLanguage("english")} alt="EN" />
          </div>
        </div>
        <Projects ref={sectionRef} text={text} />
      </div>
    );
  }

  return (
    <div className="teste-3">
      <div className="boxright">
        <span className="subtitle">Hello World</span>
        <p className="text">
          {text.bio}
        </p>
        <div className="buttons">
          <button onClick={openProjects}>{text.buttons.portfolio}</button>
          <button onClick={() => toggleWindow("experience", true)}>{text.buttons.experience}</button>
          <button onClick={() => toggleWindow("education", true)}>{text.buttons.education}</button>
        </div>
      </div>

      <div className="divEsquerda">
        <span className="titulo-interior">
          <a href="https://www.linkedin.com/in/natascha-schlegel/" target="_blank" rel="noreferrer">
            <img src={hireImage()} className="hireMe" alt="Hire Me" />
          </a>
        </span>

        <div className="textLanguages">
          <img src={germany} className="flag" onClick={() => handleLanguageChange("german")} alt="DE" />
          <img src={brazil} className="flag" onClick={() => handleLanguageChange("portuguese")} alt="PT" />
          <img src={uk} className="flag" onClick={() => handleLanguageChange("english")} alt="EN" />
        </div>
      </div>
    </div>
  );
};

export default Curriculo;