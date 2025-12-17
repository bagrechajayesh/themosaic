// src/components/Header.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Home, Settings, Mail, Info, Briefcase, Scale, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop dropdowns
  const [growthOpen, setGrowthOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  // Mobile collapsibles
  const [growthOpenMobile, setGrowthOpenMobile] = useState(false);
  const [legalOpenMobile, setLegalOpenMobile] = useState(false);

  const growthMenuRef = useRef(null);
  const legalMenuRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (growthMenuRef.current && !growthMenuRef.current.contains(e.target)) setGrowthOpen(false);
      if (legalMenuRef.current && !legalMenuRef.current.contains(e.target)) setLegalOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setGrowthOpen(false);
        setLegalOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setGrowthOpen(false);
    setLegalOpen(false);
    setGrowthOpenMobile(false);
    setLegalOpenMobile(false);
  }, [pathname]);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home, end: true },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const baseLink = 'flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200';
  const idle = 'text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  const active = 'text-blue-700 bg-blue-50';

  const isGrowthActive = pathname.startsWith('/growth');
  const isLegalActive = pathname.startsWith('/legal');

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="The Mosaic"
                  className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">THE MOSAIC</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Growth and Legal</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map(({ name, href, icon: Icon, end }) => (
              <NavLink
                key={name}
                to={href}
                end={end}
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{name}</span>
              </NavLink>
            ))}

            {/* Growth dropdown */}
            <div className="relative" ref={growthMenuRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={growthOpen}
                onMouseEnter={() => setGrowthOpen(true)}
                onClick={() => setGrowthOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setGrowthOpen((v) => !v);
                  }
                }}
                className={`${baseLink} ${isGrowthActive ? active : idle} inline-flex items-center`}
              >
                <Briefcase className="h-4 w-4" />
                <span className="font-medium">Growth</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${growthOpen ? 'rotate-180' : ''}`} />
              </button>

              {growthOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-gray-100 bg-white shadow-lg p-2"
                  onMouseEnter={() => setGrowthOpen(true)}
                >
                  <Link
                    to="/growth"
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">Growth overview</div>
                    <div className="text-sm text-gray-600">Execution-led advisory and real estate support</div>
                  </Link>
                  <hr className="my-2 border-gray-100" />
                  <Link
                    to="/growth/fitout"
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">Fitout &amp; Turnkey Execution</div>
                    <div className="text-sm text-gray-600">BOQ, vendors, timelines and on-site checks</div>
                  </Link>
                  <Link
                    to="/growth/realestate-analysis"
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">Real Estate &amp; Location Analysis</div>
                    <div className="text-sm text-gray-600">Catchment, feasibility and site selection</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Legal dropdown */}
            <div className="relative" ref={legalMenuRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={legalOpen}
                onMouseEnter={() => setLegalOpen(true)}
                onClick={() => setLegalOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLegalOpen((v) => !v);
                  }
                }}
                className={`${baseLink} ${isLegalActive ? active : idle} inline-flex items-center`}
              >
                <Scale className="h-4 w-4" />
                <span className="font-medium">Legal</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${legalOpen ? 'rotate-180' : ''}`} />
              </button>

              {legalOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-gray-100 bg-white shadow-lg p-2"
                  onMouseEnter={() => setLegalOpen(true)}
                >
                  <Link
                    to="/legal"
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setLegalOpen(false)}
                  >
                    <div className="font-medium">Legal overview</div>
                    <div className="text-sm text-gray-600">Focused support for real estate regulation</div>
                  </Link>

                  <Link
                    to="/legal/rera"
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setLegalOpen(false)}
                  >
                    <div className="font-medium">RERA Services</div>
                    <div className="text-sm text-gray-600">Compliance, disputes, appeals and execution</div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden space-y-1 pb-4">
            {navigationItems.map(({ name, href, icon: Icon, end }) => (
              <NavLink
                key={name}
                to={href}
                end={end}
                className={({ isActive }) => `${baseLink} w-full justify-start ${isActive ? active : idle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{name}</span>
              </NavLink>
            ))}

            {/* Growth collapsible */}
            <div className="px-2">
              <button
                className="w-full flex items-center justify-between px-2 py-3 rounded-md hover:bg-blue-50 text-gray-700"
                onClick={() => setGrowthOpenMobile((v) => !v)}
                aria-expanded={growthOpenMobile}
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Growth</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${growthOpenMobile ? 'rotate-180' : ''}`} />
              </button>

              {growthOpenMobile && (
                <div className="ml-7 mt-1 space-y-1">
                  <Link to="/growth" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    Overview
                  </Link>
                  <Link to="/growth/fitout" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    Fitout &amp; Turnkey Execution
                  </Link>
                  <Link to="/growth/realestate-analysis" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    Real Estate &amp; Location Analysis
                  </Link>
                </div>
              )}
            </div>

            {/* Legal collapsible */}
            <div className="px-2">
              <button
                className="w-full flex items-center justify-between px-2 py-3 rounded-md hover:bg-blue-50 text-gray-700"
                onClick={() => setLegalOpenMobile((v) => !v)}
                aria-expanded={legalOpenMobile}
              >
                <span className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  <span className="font-medium">Legal</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${legalOpenMobile ? 'rotate-180' : ''}`} />
              </button>

              {legalOpenMobile && (
                <div className="ml-7 mt-1 space-y-1">
                  <Link to="/legal" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    Overview
                  </Link>
                  <Link to="/legal/rera" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    RERA Services
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
