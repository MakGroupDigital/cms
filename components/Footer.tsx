
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, POLES } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800/50 pb-16 relative z-10">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white font-serif font-bold text-xl">
              C
            </div>
            <span className="text-xl font-serif font-bold text-white tracking-tight">CMS SARL</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Structure technique de référence en RDC. Nous offrons des solutions d'ingénierie, de sécurité et de maintenance avec un standard d'excellence international.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Linkedin, Twitter, Globe].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition-all">
                <Icon size={18}/>
              </a>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 border-l-4 border-red-600 pl-4">Nos Activités</h4>
          <ul className="space-y-4 text-sm">
            {POLES.map((pole) => (
              <li key={pole.id}>
                <Link to="/nos-poles" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-red-500 transition-colors"></div>
                  {pole.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/nos-poles" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-red-500 transition-colors"></div>
                Génie Civil & BTP
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 border-l-4 border-red-600 pl-4">Siège Social</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-red-600 flex-shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-red-600 flex-shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 border-l-4 border-red-600 pl-4">Actualités</h4>
          <p className="text-sm text-slate-400 mb-6 italic">Restez informé de nos projets et innovations en RDC.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded w-full focus:ring-2 focus:ring-red-600 focus:outline-none text-sm transition-all" 
            />
            <button className="bg-red-600 text-white px-5 py-3 rounded hover:bg-red-700 transition-colors font-bold shadow-lg">OK</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Congo Mapendo Service. Tous droits réservés.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            Haut de page <ArrowUp size={14}/>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
