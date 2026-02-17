
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Groupe', path: '/le-groupe' },
    { name: 'Nos Pôles', path: '/nos-poles' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className={`transition-all duration-500 rounded-2xl border ${scrolled ? 'glass px-6 py-3 shadow-2xl' : 'bg-transparent py-4 border-transparent'}`}>
          <div className="flex justify-between items-center">
            {/* Logo Dynamique */}
            <Link to="/" className="flex items-center gap-4 group">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 bg-red-600 flex items-center justify-center rounded-xl text-white font-serif font-bold text-xl shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              >
                C
              </motion.div>
              <div className="leading-tight">
                <h1 className="text-white font-black text-lg tracking-tighter uppercase group-hover:text-red-500 transition-colors">CMS <span className="font-light italic opacity-60">SARL</span></h1>
                <p className="text-[8px] text-slate-400 uppercase tracking-[0.4em] font-medium">Kinshasa | DRC</p>
              </div>
            </Link>

            {/* Desktop Menu - Glass Design */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2 group ${
                    isActive(link.path) ? 'text-red-500' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-red-600 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-red-600 transition-all shadow-[0_10px_20px_rgba(239,68,68,0.2)] active:scale-95"
              >
                Audit Gratuit
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden w-12 h-12 glass rounded-xl flex items-center justify-center text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Futuriste */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[110] bg-slate-950 p-10 flex flex-col justify-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white"><X size={48}/></button>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-5xl font-serif font-black text-white hover:text-red-600 transition-colors uppercase italic"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link 
                to="/contact" 
                className="bg-red-600 text-white text-center py-6 rounded-3xl font-black uppercase tracking-widest text-xl mt-12"
                onClick={() => setIsOpen(false)}
              >
                Lancer un Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
