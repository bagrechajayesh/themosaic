// src/components/Header.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Home, Settings, Mail, Info, Briefcase, Film, Scale, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // adjust if your path differs

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [growthOpen, setGrowthOpen] = useState(false);          // desktop dropdown
  const [growthOpenMobile, setGrowthOpenMobile] = useState(false);
  const menuRef = useRef(null);

  // Close desktop dropdown on outside click or ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setGrowthOpen(false);
    };
    const onEsc = (e) => e.key === 'Escape' && setGrowthOpen(false);
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setGrowthOpen(false);
    setGrowthOpenMobile(false);
  }, [pathname]);

  // Optional prefetch to make submenu pages feel instant
  const prefetchPosh = () => import('../pages/growth/Posh');
  const prefetchComm = () => import('../pages/growth/Communication');
  const prefetchCreat = () => import('../pages/growth/Creative');

  // Your existing nav items (minus Growth; it’s rendered as a dropdown)
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home, end: true },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Entertainment', href: '/entertainment', icon: Film },
    // { name: 'Growth', href: '/growth', icon: Briefcase }, // handled separately
    { name: 'Legal', href: '/legal', icon: Scale },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  const baseLink = 'flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200';
  const idle = 'text-gray-700 hover:text-blue-600 hover:bg-blue-50';
  const active = 'text-blue-700 bg-blue-50';

  const isGrowthActive = pathname.startsWith('/growth');

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
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems
              .filter((i) => i.name !== 'Growth')
              .slice(0, 2) // Home, Services
              .map(({ name, href, icon: Icon, end }) => (
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

            {/* Growth dropdown (desktop) — patched so it stays open */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={growthOpen}
                onMouseEnter={() => setGrowthOpen(true)}    // open on hover
                onClick={() => setGrowthOpen((v) => !v)}    // toggle on click
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
                  onMouseEnter={() => setGrowthOpen(true)}  // keep open while hovering panel
                  // no onMouseLeave; close via outside click / ESC / item click
                >
                  <Link
                    to="/growth"
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">Growth overview</div>
                    <div className="text-sm text-gray-600">Explore all growth services</div>
                  </Link>
                  <hr className="my-2 border-gray-100" />
                  <Link
                    to="/growth/posh"
                    onMouseEnter={prefetchPosh}
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">POSH Compliance Guidance</div>
                    <div className="text-sm text-gray-600">Policy, IC setup, awareness & audits</div>
                  </Link>
                  <Link
                    to="/growth/communication"
                    onMouseEnter={prefetchComm}
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">Effective Communication Skills</div>
                    <div className="text-sm text-gray-600">Public speaking, writing, exec presence</div>
                  </Link>
                  <Link
                    to="/growth/creative"
                    onMouseEnter={prefetchCreat}
                    className="block rounded-xl px-3 py-2 hover:bg-gray-50"
                    onClick={() => setGrowthOpen(false)}
                  >
                    <div className="font-medium">Creative Thinking Workshop</div>
                    <div className="text-sm text-gray-600">Unconventional problem-solving</div>
                  </Link>
                </div>
              )}
            </div>

            {navigationItems
              .filter((i) => i.name !== 'Growth')
              .slice(2) // rest (Entertainment, Legal, About, Contact)
              .map(({ name, href, icon: Icon, end }) => (
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
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-2 space-y-1 border-top border-gray-200">
            {navigationItems
              .filter((i) => i.name !== 'Growth')
              .map(({ name, href, icon: Icon, end }) => (
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

            {/* Growth collapsible (mobile) */}
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
                  <Link to="/growth/posh" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    POSH Compliance Guidance
                  </Link>
                  <Link to="/growth/communication" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    Effective Communication Skills
                  </Link>
                  <Link to="/growth/creative" className="block px-2 py-2 rounded-md hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
                    Creative Thinking Workshop
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
