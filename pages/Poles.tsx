
import React, { useState } from 'react';
// Import Link from react-router-dom
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import { POLES } from '../constants';

const Poles: React.FC = () => {
  const [activePole, setActivePole] = useState(POLES[0]);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-xs">Services Spécialisés</h3>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 font-bold mb-8">Nos Pôles d'Expertise</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {POLES.map((pole) => (
              <button
                key={pole.id}
                onClick={() => setActivePole(pole)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activePole.id === pole.id 
                  ? 'bg-red-600 text-white shadow-xl' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-red-300'
                }`}
              >
                {pole.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="w-20 h-20 bg-slate-900 text-white flex items-center justify-center rounded-2xl shadow-xl">
              {activePole.icon}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              {activePole.title}
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              {activePole.longDesc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {activePole.services.map((svc, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="w-8 h-8 bg-red-100 text-red-600 flex items-center justify-center rounded-full flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{svc}</span>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-lg font-bold uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl group"
              >
                Demander une étude technique <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600/5 rounded-3xl group-hover:bg-red-600/10 transition-colors"></div>
            <img 
              src={activePole.image} 
              alt={activePole.title} 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10 grayscale-[50%] hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute top-10 -right-10 bg-white p-8 rounded-xl shadow-2xl z-20 max-w-[200px] hidden md:block border border-slate-100">
              <div className="text-red-600 font-serif text-3xl font-bold mb-1">Qualité</div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-widest leading-relaxed">Standard CMS garanti sur toutes nos prestations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Banner */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Besoin d'une expertise spécifique hors catalogue ?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Notre bureau d'études analyse vos besoins sur-mesure pour vous proposer des solutions techniques innovantes et économiquement viables.
          </p>
          {/* Fix: Added missing Link component from react-router-dom */}
          <Link to="/contact" className="px-12 py-5 border-2 border-red-600 text-red-500 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all rounded">
            Consulter notre Bureau d'Études
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Poles;
