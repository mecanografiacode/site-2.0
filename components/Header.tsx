import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
  }, [location]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-slate-100 font-sans">
      {/* Top Bar */}
      <div className="bg-brand-blue text-slate-300 text-[10px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex gap-4 items-center flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 font-semibold text-brand-accent">RECANTO DAS EMAS:</span>
            <span className="flex items-center gap-1"><Phone size={12} /> Qd 206: (61) 3333-0000</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1"><Phone size={12} /> Qd 201: (61) 3333-1111</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Área do Aluno</a>
            <a href="#" className="hover:text-white transition">Área do Professor</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO SECTION - Using local file in public folder */}
          <NavLink to="/" className="flex items-center group">
            <img 
              src="/logo.png"
              alt="Colégio Reação" 
              className="h-14 md:h-16 w-auto hover:scale-105 transition-transform duration-300 object-contain" 
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <button className="flex items-center gap-1 text-slate-600 hover:text-brand-red font-medium py-2 transition">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => 
                      `font-medium transition py-2 ${isActive ? 'text-brand-red font-bold' : 'text-slate-600 hover:text-brand-red'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Dropdown */}
                {item.subItems && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg border-t-4 border-brand-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    {item.subItems.map(sub => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-red border-b border-slate-50 last:border-0"
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <NavLink 
              to="/matriculas" 
              className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all hover:scale-105"
            >
              Matrículas 2026
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <div>
                    <button 
                      onClick={() => setActiveSubMenu(activeSubMenu === item.label ? null : item.label)}
                      className="flex justify-between items-center w-full text-left font-medium text-slate-700 py-3 border-b border-slate-50"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transform transition ${activeSubMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeSubMenu === item.label && (
                      <div className="pl-4 bg-slate-50 rounded-lg mt-1 space-y-1 py-2">
                        {item.subItems.map(sub => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className="block py-2 text-sm text-slate-600"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => 
                      `block py-3 border-b border-slate-50 font-medium ${isActive ? 'text-brand-red' : 'text-slate-700'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <NavLink 
              to="/matriculas" 
              className="block bg-brand-red text-white text-center py-3 rounded-lg font-bold mt-4"
            >
              Matrículas 2026
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;