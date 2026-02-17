
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Votre demande a été reçue. Notre équipe technique vous contactera sous peu.");
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-xs">Nous Rejoindre</h3>
              <h1 className="text-5xl md:text-7xl font-serif text-slate-900 font-bold leading-tight">Parlons de <br/><span className="text-red-600">vos Projets.</span></h1>
            </div>
            <div className="text-slate-500 text-lg max-w-md">
              Que vous soyez une entreprise, une institution publique ou un particulier, CMS SARL est à votre écoute pour transformer vos idées en réalisations techniques concrètes.
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageSquare size={120} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Coordonnées</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Bureau Principal</h4>
                    <p className="text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Téléphone</h4>
                    <p className="text-sm leading-relaxed">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Email</h4>
                    <p className="text-sm leading-relaxed">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={24}/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Disponibilité</h4>
                    <p className="text-sm leading-relaxed">Support Technique: 24h/7j<br/>Bureaux: Lun-Ven (8h-17h)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Nom Complet</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all" placeholder="Ex: Jean Mukendi" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all" placeholder="Ex: jean@entreprise.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Sujet / Pôle concerné</label>
                  <select className="w-full bg-slate-50 border border-slate-200 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all">
                    <option>Infrastructure & Énergie</option>
                    <option>Technologie & Sécurité</option>
                    <option>Facility Management</option>
                    <option>Autre Demande</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all" placeholder="+243 ..." />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Détails de votre projet</label>
                  <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all" placeholder="Décrivez brièvement vos besoins..."></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full md:w-auto px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest rounded-lg shadow-xl shadow-red-600/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95">
                    Envoyer ma demande <Send size={20}/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
        <iframe 
          title="CMS Headquarter"
          src={CONTACT_INFO.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
