import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/blog', label: 'Blog' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scrolling - change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-bold text-xl md:text-2xl text-primary-600 dark:text-primary-300 transition-colors"
        >
          <span className="font-serif">S.</span> 
          <span className="font-sans">Ali Naqi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-300 ${
                location.pathname === link.path
                  ? 'text-primary-600 dark:text-primary-300 font-medium'
                  : 'text-neutral-700 dark:text-neutral-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-neutral-300" />
            ) : (
              <Moon size={20} className="text-neutral-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="mr-3 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-neutral-300" />
            ) : (
              <Moon size={20} className="text-neutral-700" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-neutral-700 dark:text-neutral-300" />
            ) : (
              <Menu size={24} className="text-neutral-700 dark:text-neutral-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600 dark:text-primary-300 font-medium'
                      : 'text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;