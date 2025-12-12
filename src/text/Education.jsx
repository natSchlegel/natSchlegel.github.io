import React, { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { isMobile } from "react-device-detect";
import { useOS } from "../Context";

const windowVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: 50,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  },
  close: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.2 }
  },
  minimize: {
    scale: 0.1,
    opacity: 0,
    y: 800,
    x: -300,
    transition: { duration: 0.4 }
  }
};

const Education = () => {
  const { text, toggleWindow } = useOS();
  const [isMaximized, setIsMaximized] = useState(false);
  const [exitType, setExitType] = useState('close');
  const controls = useDragControls();

  const handleClose = () => {
    setExitType('close');
    toggleWindow("education", false);
  };

  const handleMinimize = () => {
    setExitType('minimize');
    toggleWindow("education", false);
  };

  const handleMaximize = () => {
    setIsMaximized(prev => !prev);
  };

  if (isMobile) {
    return (
      <div className="text-box-mobile" id="education">
        <div className="text-menu">
          <div className="text-circles"></div>
          <div className="text-menu-text">
            <div className="text-menu-title">{text.education.tab} </div>-
            <div className="text-menu-subtitle">edited</div>
          </div>
        </div>
        <div className="text-itself-mobile">
          <div>
            <div className="text-itself-title"> # {text.education.title} </div>
            <div className="text-itself-subtitle">{text.education.subtitle}</div>
            <div className="text-itself-dates">{text.education.dates}</div>
            <div className="text-itself-text">{text.education.text}</div>
            <div className="text-itself-skills">
              <div className="text-itself-skills-title">{text.education.skills}:</div>
              <div className="text-itself-skills-text">{text.education.skillsText}</div>
            </div>
          </div>
          <span>------------------------------------</span>
          {text.education.certifications && Object.keys(text.education.certifications).length > 0 ? (
            Object.keys(text.education.certifications).map((key) => {
              const item = text.education.certifications[key];
              return (
                <div key={key}>
                  <div className="text-itself-title"> # {item.name} </div>
                  <div className="text-itself-dates">{item.company} · {item.date}</div>
                  <div className="text-itself-skills">
                    <div className="text-itself-skills-title">{text.education.skills}:</div>
                    <div className="text-itself-skills-text">{item.skill}</div>
                  </div>
                  <span>------------------------------------</span>
                </div>
              );
            })
          ) : (
            <h2>Erro</h2>
          )}
        </div>
        <div className="text-footer">
          84 {text.education.words} · 629 {text.education.characters} · 22 {text.education.lines}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="text-box"
      variants={windowVariants}
      initial="initial"
      animate={isMaximized ? {
        width: '90vw',
        height: '90vh',
        x: '5vw',
        y: '5vh',
        borderRadius: 0,
        position: 'fixed',
        zIndex: 1001
      } : "animate"}
      exit={exitType}
      drag={!isMaximized}
      dragListener={false}
      dragControls={controls}
      dragMomentum={false}
      style={{ position: 'fixed', zIndex: 1001 }}
    >
      <div 
        className="text-menu" 
        onPointerDown={(e) => controls.start(e)}
        style={{ cursor: "grab" }}
      >
        <div className="text-circles">
          <div className="circle-red" onClick={handleClose}></div>
          <div className="circle-yellow" onClick={handleMinimize}></div>
          <div className="circle-green" onClick={handleMaximize}></div>
        </div>
        <div className="text-menu-text">
          <div className="text-menu-title">{text.education.tab} </div>-
          <div className="text-menu-subtitle">edited</div>
        </div>
      </div>
      <div className="text-itself">
        <div>
          <div className="text-itself-title"> # {text.education.title} </div>
          <div className="text-itself-subtitle">{text.education.subtitle}</div>
          <div className="text-itself-dates">{text.education.dates}</div>
          <div className="text-itself-text">{text.education.text}</div>
          <div className="text-itself-skills">
            <div className="text-itself-skills-title">{text.education.skills}:</div>
            <div className="text-itself-skills-text">{text.education.skillsText}</div>
          </div>
        </div>
        <span>-------------------------------------</span>
        {text.education.certifications && Object.keys(text.education.certifications).length > 0 ? (
          Object.keys(text.education.certifications).map((key) => {
            const item = text.education.certifications[key];
            return (
              <div key={key}>
                <div className="text-itself-title"> # {item.name} </div>
                <div className="text-itself-dates">{item.company} · {item.date}</div>
                <div className="text-itself-skills">
                  <div className="text-itself-skills-title">{text.education.skills}:</div>
                  <div className="text-itself-skills-text">{item.skill}</div>
                </div>
                <span>-------------------------------------</span>
              </div>
            );
          })
        ) : (
          <h2>Erro</h2>
        )}
      </div>
      <div className="text-footer">
        84 {text.education.words} · 629 {text.education.characters} · 22 {text.education.lines}
      </div>
    </motion.div>
  );
};

export default Education;