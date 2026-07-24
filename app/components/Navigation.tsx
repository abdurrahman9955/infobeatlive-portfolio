
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// --- TYPES & INTERFACES (Simulating /types directory) ---
type Route = 'home' | 'about' | 'services' | 'education' | 'causes' | 'skills' | 'projects' | 'experience';


const Button = ({ children, onClick, primary = false, className = "", icon: Icon }: any) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
      ${primary 
        ? "bg-amber-500 hover:bg-amber-400 text-slate-950" 
        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"}
      ${className}
    `}
  >
    {children}
    {Icon && <Icon className="w-4 h-4" />}
  </button>
);

//{ currentRoute, setRoute }: { currentRoute: Route, setRoute: (r: Route) => void }

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: { label: string, route: Route }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Experience', route: 'experience' },
    { label: 'Projects', route: 'projects' },
    { label: 'Skills', route: 'skills' }, // Acts as a grouping in a real dropdown, mapped to skills for demo
  ];

  const handleNav = (route: Route) => {
    //setRoute(route);
    setIsOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        <a href={`#${'home'}`}>  
        <div  className="text-xl font-bold text-white cursor-pointer flex items-center gap-2"
          //onClick={() => handleNav('home')}
          >
          <div className="w-9 h-9 bg-amber-500 rounded flex items-center justify-center text-slate-950 font-black">A</div>
            <div>
             <p className='text-sm'>Abdurrahman Sale</p>
             <p className='text-sm text-yellow-600'>Senior Web Developer</p>
            </div>
        </div></a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            
            <button 
              key={item.route}
              //onClick={() => handleNav(item.route)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors 
                ${item.route === item.route ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
            >
              <a href={`#${item.route}`}> {item.label} </a>
            </button>
            
          ))}

          <a href='https://www.linkedin.com/in/abdurrahman-sale-7b301726a/' 
                target="_blank" rel="noopener noreferrer"> 
            <Button primary className="ml-4 text-sm px-5 py-2" onClick={() => handleNav('skills')}>Connect With Me</Button>
          </a>

        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl py-4 px-6 flex flex-col gap-2"
          >
            {['home', 'about', 'services', 'experience', 'projects', 'education', 'causes', 'skills', 'process', 'testimonials', 'faq', 'blog', 'contact'].map(route => (
              <button 
                key={route}
                //onClick={() => handleNav(route as Route)}
                className={`text-left px-4 py-3 rounded-lg capitalize font-medium ${route === route ? 'text-slate-300' : 'text-slate-300'}`}
              >
                  <a href={`#${route}`}> {route} </a>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};