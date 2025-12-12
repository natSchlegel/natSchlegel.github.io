import React from 'react';
import { motion } from 'framer-motion';
import { APPS } from '../../constants'; 


const DockItem = ({ 
  app, 
  isOpen, 
  isActive,
  onClick 
}) => {
  return (
    <motion.div 
      className="relative group flex flex-col items-center cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs py-1 px-3 rounded-md pointer-events-none whitespace-nowrap">
          {app.title}
      </div>
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white shadow-lg' : 'bg-white/80 hover:bg-white'}`}>
          <app.icon size={28} className="text-gray-800" />
      </div>
      <div className={`w-1 h-1 mt-1 rounded-full bg-black transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  );
}


export const Dock = ({ openAppIds, activeWindowId, onAppClick }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="bg-white/20 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 flex items-end space-x-2 shadow-2xl pointer-events-auto">
        
        {APPS.filter(app => !app.isExternal).map((app) => {
          const isOpen = openAppIds.includes(app.id);
          const isActive = activeWindowId === app.id;
          
          return (
            <DockItem 
              key={app.id} 
              app={app} 
              isOpen={isOpen}
              isActive={isActive}
              onClick={() => onAppClick(app.id)} 
            />
          );
        })}
        
        <div className="w-[1px] h-10 bg-white/30 mx-2 self-center" />
        
        {APPS.filter(app => app.isExternal).map((app) => (
            <DockItem 
              key={app.id} 
              app={app} 
              isOpen={false}
              isActive={false}
              onClick={() => window.open(app.url, '_blank')} 
            />
        ))}
      </div>
    </div>
  );
};