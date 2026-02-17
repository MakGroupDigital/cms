
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Award, Users, Clock, CheckCircle2, Zap, Shield, Building2, Globe } from 'lucide-react';
import { POLES, STATS } from '../constants';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-slate-950 overflow-hidden">
      {/* Hero Section - Ultra Futuriste */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=2070&auto=format&fit=crop" 
            alt="Futuristic Building" 
            className="w-full h-full object-cover opacity-30 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 glass rounded-full mb-8 text-red-500 text-xs font-black uppercase tracking-[0.5em]"
          >
            L'Avenir est en marche
          </motion.div>
          
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-9xl font-serif text-white font-black leading-tight mb-8"
          >
            CMS <span className="text-red-600 italic">SARL</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Structure d'ingénierie d'élite. Là où la vision rencontre la <span className="text-white font-bold">réalité industrielle</span>.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link 
              to="/nos-poles" 
              className="group relative px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest overflow-hidden transition-all duration-300 rounded-sm hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Propulser votre projet <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10"></div>
            </Link>
          </motion.div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </section>

      {/* Stats Interactives */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="glass p-8 rounded-2xl text-center group transition-all duration-500"
              >
                <div className="text-red-500 font-serif text-5xl font-black mb-2 text-glow">{stat.value}</div>
                <div className="text-white font-bold uppercase text-[10px] tracking-[0.3em] opacity-60 mb-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Expertise */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h3 className="text-red-500 font-black uppercase tracking-[0.4em] mb-4 text-xs">Domaines de Puissance</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white">Une Hub de Solutions Intégrées</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Pole 1 */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-8 relative rounded-3xl overflow-hidden group border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="BTP" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <div className="text-red-500 mb-4"><Building2 size={48} /></div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4 uppercase">Infrastructure & Énergie</h3>
                <p className="text-slate-300 max-w-md text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Forage d'eau, construction de ponts et déploiement de solutions d'énergie solaire à grande échelle en RDC.</p>
                <Link to="/nos-poles" className="inline-flex items-center gap-3 text-red-500 font-bold uppercase text-xs tracking-widest">Voir le pôle <ArrowRight size={16} /></Link>
              </div>
            </motion.div>

            {/* Pole 2 */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 relative rounded-3xl overflow-hidden group border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt="Security" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <div className="text-red-500 mb-4"><Shield size={48} /></div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase">Technologie & Sécurité</h3>
                <Link to="/nos-poles" className="inline-flex items-center gap-3 text-red-500 font-bold uppercase text-xs tracking-widest">Accéder <ArrowRight size={16} /></Link>
              </div>
            </motion.div>

            {/* Pole 3 */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 relative rounded-3xl overflow-hidden group border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1581578731522-745d05db9ad2?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Facility" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              <div className="absolute bottom-0 p-10">
                <div className="text-red-500 mb-4"><Zap size={48} /></div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase">Facility Management</h3>
                <Link to="/nos-poles" className="inline-flex items-center gap-3 text-red-500 font-bold uppercase text-xs tracking-widest">Détails <ArrowRight size={16} /></Link>
              </div>
            </motion.div>

            {/* CTA Bento */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-8 bg-red-600 rounded-3xl flex items-center justify-center p-12 text-center relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-serif font-bold text-white mb-6">Prêt à moderniser vos infrastructures ?</h3>
                <Link to="/contact" className="px-12 py-5 bg-white text-red-600 font-black uppercase tracking-widest rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-2xl">Lancer un Audit</Link>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee de Partenaires (Activité constante) */}
      <section className="py-20 bg-white/5 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee-container">
           {[1,2,3,4,5,6,1,2,3,4,5,6].map((i) => (
             <div key={i} className="mx-12 flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold">P</div>
               <span className="text-2xl font-bold uppercase tracking-widest text-white">Partenaire_{i}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Section Engagement - Animation Déstructurée */}
      <section className="py-32 max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-red-500 font-black uppercase tracking-[0.4em] text-xs">ADN Corporatif</h3>
              <h2 className="text-5xl font-serif text-white">L'Excellence n'est pas une option, c'est notre moteur.</h2>
            </div>
            
            <div className="grid gap-8">
              {[
                { icon: Award, title: "Qualité d'Élite", text: "Processus certifiés et matériaux de premier choix." },
                { icon: Users, title: "Capital Humain", text: "Des techniciens formés aux standards internationaux." },
                { icon: Clock, title: "Rapidité Laser", text: "Délais respectés pour une efficacité maximale." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 p-6 glass rounded-2xl border-l-4 border-red-600 group"
                >
                  <div className="text-red-500 group-hover:scale-125 transition-transform"><item.icon size={32} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full"></div>
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" className="rounded-[40px] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000 relative z-10 border border-white/10" alt="Our Team" />
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl z-20 border-b-4 border-red-600 animate-float">
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-red-500 text-xs font-black uppercase tracking-widest">Support Technique</div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-container {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
