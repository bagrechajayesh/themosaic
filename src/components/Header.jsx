import React, { useState } from 'react';
import { Menu, X, Home, Settings, Mail, Info, Briefcase, Film, Scale } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // cache-busted by Vite

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home, end: true },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Entertainment', href: '/entertainment', icon: Film },
    { name: 'Growth', href: '/growth', icon: Briefcase },
    { name: 'Legal', href: '/legal', icon: Scale },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  const baseLink =
    'flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200';
  const idle =
    'text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  const active =
    'text-blue-700 bg-blue-50';

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="The Mosaic - Professional Services"
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  THE MOSAIC
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                  Professional Services
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigationItems.map(({ name, href, icon: Icon, end }) => (
              <NavLink
                key={name}
                to={href}
                end={end}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? active : idle}`
                }
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-2 space-y-1 border-t border-gray-200">
            {navigationItems.map(({ name, href, icon: Icon, end }) => (
              <NavLink
                key={name}
                to={href}
                end={end}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive ? active : idle
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
