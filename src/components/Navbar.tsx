import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="font-terminal fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 px-6 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo/Name */}
        <a href="#" className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
          <span className="text-cyan-500 mr-1">K</span>
          <span className="hidden sm:inline">evin</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
          <a href="#about" className="hover:text-cyan-500 transition-colors text-slate-700 dark:text-slate-300">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors text-slate-700 dark:text-slate-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-500 transition-colors text-slate-700 dark:text-slate-300">
            Contact
          </a>
        </div>
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          {/* Dark mode toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 py-3 px-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
