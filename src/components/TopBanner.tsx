import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const TopBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-galaxy-card/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-galaxy-text-primary">PrimeTrader AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors">
              Home
            </Link>
            <Link to="/docs" className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors">
              Docs
            </Link>
            <a href="#roadmap" className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors">
              Roadmap
            </a>
            <a href="#team" className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors">
              Team
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-galaxy-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/docs"
                className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <a
                href="#roadmap"
                className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </a>
              <a
                href="#team"
                className="text-galaxy-text-primary hover:text-galaxy-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBanner;