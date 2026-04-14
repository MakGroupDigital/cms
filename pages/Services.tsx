import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';
import { POLES } from '../constants';

const Services: React.FC = () => {
  const [expandedPole, setExpandedPole] = useState<string | null>(POLES[0].id);

  return (
    <div className="pt-20 bg-slate-950">
      {/* Page Header */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            className="w-full h-full object-cover opacity-20"
            alt="Services background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white font-black mb-8 uppercase tracking-tighter italic">Nos <span className="text-red-600">Services</span></h1>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Une gamme complète de solutions techniques pour tous vos besoins en infrastructure, technologie et facility management.
          </p>
        </motion.div>
      </section>

      {/* Services Détaillés par Pôle */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="space-y-8">
          {POLES.map((pole, i) => (
            <motion.div 
              key={pole.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedPole(expandedPole === pole.id ? null : pole.id)}
                className="w-full p-8 bg-gradient-to-r from-slate-900/50 to-transparent hover:from-slate-900 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-6 text-left">
                  <div className="text-red-500 group-hover:scale-125 transition-transform">{pole.icon}</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white uppercase mb-2">{pole.title}</h3>
                    <p className="text-slate-400">{pole.desc}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedPole === pole.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-red-500" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedPole === pole.id ? 'auto' : 0,
                  opacity: expandedPole === pole.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-white/5 border-t border-white/10">
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">{pole.longDesc}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services Inclus</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pole.services.map((service, j) => (
                        <motion.div 
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.05 }}
                          className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all"
                        >
                          <CheckCircle size={20} className="text-red-500 flex-shrink-0" />
                          <span className="text-slate-300">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.a 
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg font-bold uppercase tracking-widest hover:bg-red-700 transition-all group"
                  >
                    Demander un Devis <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Avantages Supplémentaires */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif text-white mb-6">Avantages de Nos Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expertise Reconnue", desc: "Plus de 10 ans d'expérience dans chaque domaine" },
              { title: "Équipes Qualifiées", desc: "Techniciens certifiés et régulièrement formés" },
              { title: "Matériaux Premium", desc: "Utilisation de composants de première qualité" },
              { title: "Délais Respectés", desc: "Planification rigoureuse et suivi constant" },
              { title: "Support 24/7", desc: "Assistance technique permanente et urgences" },
              { title: "Garantie Complète", desc: "Couverture totale et maintenance incluse" }
            ].map((adv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl text-center border border-white/10 hover:border-red-600/50 transition-all"
              >
                <h4 className="text-white font-bold text-lg mb-3 uppercase">{adv.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-5xl font-serif text-white mb-8">Besoin d'un Service Spécifique ?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">Contactez notre équipe pour discuter de vos besoins et obtenir une solution sur-mesure.</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-12 py-5 bg-red-600 text-white rounded-lg font-bold uppercase tracking-widest hover:bg-red-700 transition-all"
          >
            Nous Contacter <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
