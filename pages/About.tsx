
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Globe, ShieldCheck, MapPin } from 'lucide-react';
import { TEAM, CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-950">
      {/* Page Header Futuriste */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Corporate background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white font-black mb-8 uppercase tracking-tighter italic">L'Âme de <span className="text-red-600">CMS</span></h1>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Une architecture humaine dédiée à la grandeur industrielle de la République Démocratique du Congo.
          </p>
        </motion.div>
      </section>

      {/* Histoire Dynamique */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.4em]">Depuis 2015</div>
          <h2 className="text-5xl font-serif text-white leading-tight">Forger le futur, pierre par pierre.</h2>
          <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              CMS SARL n'est pas seulement une entreprise, c'est un engagement envers le sol congolais. Nous avons bâti notre succès sur l'idée que le savoir-faire technique doit être accessible et irréprochable.
            </p>
            <p>
              Sous la direction d'une équipe disciplinée et visionnaire, nous avons transformé des défis logistiques en succès d'ingénierie, de Kinshasa aux provinces les plus reculées.
            </p>
          </div>
          <div className="p-8 border-l-4 border-red-600 bg-white/5 rounded-r-2xl italic text-white text-xl">
            "Notre idéal est de rendre l'utile à l'agréable. La satisfaction de nos clients est la base de notre développement constant."
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-red-600/20 blur-2xl rounded-full"></div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl relative z-10 border border-white/10" alt="Innovation" />
        </motion.div>
      </section>

      {/* Vision 2030 Bento Style */}
      <section className="bg-white/5 py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Mission", text: "Propulser les standards techniques congolais au niveau mondial.", color: "bg-red-600" },
            { icon: Eye, title: "Vision", text: "Être le partenaire n°1 de la reconstruction nationale.", color: "bg-slate-900" },
            { icon: Heart, title: "Valeurs", text: "Intégrité absolue, Discipline et Excellence Opérationnelle.", color: "bg-slate-900" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[40px] border border-white/5 group hover:bg-white/10 transition-all"
            >
              <div className={`w-16 h-16 ${card.color} text-white flex items-center justify-center rounded-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                <card.icon size={32}/>
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-wider">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Équipe Futuriste */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif text-white mb-6 italic">Les visages de l'Excellence</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-[40px] border border-white/10">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10 p-2">
                   <h4 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h4>
                   <p className="text-red-500 font-black uppercase text-[10px] tracking-[0.3em]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
