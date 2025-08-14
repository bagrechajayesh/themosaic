import React, { useState } from 'react';
import { Menu, X, Home, Settings, Mail, Info } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0">
                {/* Logo Image */}
                <img 
                  src="/logo.png" 
                  alt="TheMosaic - Professional Services" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Try different extensions if logo.png doesn't exist
                    const extensions = ['svg', 'jpg', 'jpeg', 'webp'];
                    const currentSrc = e.target.src;
                    const basePath = currentSrc.substring(0, currentSrc.lastIndexOf('.'));
                    const currentExt = currentSrc.substring(currentSrc.lastIndexOf('.') + 1);
                    const nextExtIndex = extensions.indexOf(currentExt) + 1;
                    
                    if (nextExtIndex < extensions.length) {
                      e.target.src = `${basePath}.${extensions[nextExtIndex]}`;
                    } else {
                      // Show text fallback if no logo file found
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback mosaic-style logo using CSS */}
                <div className="hidden items-center justify-center h-12 w-12 bg-gradient-to-br from-teal-600 via-orange-500 to-red-600 rounded-lg">
                  <div className="grid grid-cols-3 gap-0.5 w-8 h-8">
                    <div className="bg-red-700 rounded-sm"></div>
                    <div className="bg-teal-700 rounded-sm"></div>
                    <div className="bg-teal-600 rounded-sm"></div>
                    <div className="bg-teal-600 rounded-sm"></div>
                    <div className="bg-teal-700 rounded-sm"></div>
                    <div className="bg-orange-600 rounded-sm"></div>
                    <div className="bg-teal-600 rounded-sm"></div>
                    <div className="bg-orange-600 rounded-sm"></div>
                    <div className="bg-red-700 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900 leading-tight">THE MOSAIC</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Professional Services</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-2 space-y-1 border-t border-gray-200">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;