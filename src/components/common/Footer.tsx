import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-300">
                <span className="font-serif">S.</span> 
                <span className="font-sans">Ali Naqi Hasni</span>
              </h3>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 max-w-md">
              Software developer and technology enthusiast with a passion for creating beautiful, user-friendly applications that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-neutral-600 dark:text-neutral-400 text-sm">
          <p>© {currentYear} Syed Ali Naqi Hasni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;