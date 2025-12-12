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

const Experience = () => {
  const { text, toggleWindow } = useOS();
  const [isMaximized, setIsMaximized] = useState(false);
  const [exitType, setExitType] = useState('close');
  const controls = useDragControls();

  const handleClose = () => {
    setExitType('close');
    toggleWindow("experience", false);
  };

  const handleMinimize = () => {
    setExitType('minimize');
    toggleWindow("experience", false);
  };

  const handleMaximize = () => {
    setIsMaximized(prev => !prev);
  };

  if (isMobile) {
    return (
      <div className="text-box-mobile">
        <div className="text-menu">
          <div className="text-menu-text">
            <div className="text-menu-title">experience</div>-
            <div className="text-menu-subtitle">edited</div>
          </div>
        </div>
        <div className="text-itself-mobile">
          <div>
            {text.experience && Object.keys(text.experience).length > 0 ? (
              Object.keys(text.experience).map((key) => {
                const item = text.experience[key];
                return (
                  <div key={key}>
                    <div className="text-itself-title"> # {item.job}</div>
                    <div className="text-itself-dates">{item.company} · {item.type}</div>
                    <div className="text-itself-dates">{item.period} · {item.duration}</div>
                    <div className="text-itself-skills">
                      <div className="text-itself-skills-title">Competences:</div>
                      <div className="text-itself-skills-text">
                        {item.competences.join(', ')}
                      </div>
                    </div>
                    <span>------------------------------------</span>
                  </div>
                );
              })
            ) : (
              <h2>Error: No experience data available</h2>
            )}
          </div>
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
        zIndex: 1000
      } : "animate"}
      exit={exitType}
      drag={!isMaximized}
      dragListener={false}
      dragControls={controls}
      dragMomentum={false}
      style={{ position: 'fixed', zIndex: 1000 }}
    >
      <div className="text-menu" onPointerDown={(e) => controls.start(e)}>
        <div className="text-circles">
          <div className="circle-red" onClick={handleClose}></div>
          <div className="circle-yellow" onClick={handleMinimize}></div>
          <div className="circle-green" onClick={handleMaximize}></div>
        </div>
        <div className="text-menu-text">
          <div className="text-menu-title">experience</div>-
          <div className="text-menu-subtitle">edited</div>
        </div>
      </div>
      <div className="text-itself">
        <div>
          {text.experience && Object.keys(text.experience).length > 0 ? (
            Object.keys(text.experience).map((key) => {
              const item = text.experience[key];
              return (
                <div key={key}>
                  <div className="text-itself-title"> # {item.job}</div>
                  <div className="text-itself-dates">{item.company} · {item.type}</div>
                  <div className="text-itself-dates">{item.period} · {item.duration}</div>
                  <div className="text-itself-skills">
                    <div className="text-itself-skills-title">Competences:</div>
                    <div className="text-itself-skills-text">
                      {item.competences.join(', ')}
                    </div>
                  </div>
                  <span>-------------------------------------</span>
                </div>
              );
            })
          ) : (
            <h2>Error: No experience data available</h2>
          )}
        </div>
      </div>
      <div className="text-footer">
        84 {text.education.words} · 629 {text.education.characters} · 22 {text.education.lines}
      </div>
    </motion.div>
  );
};

export default Experience;