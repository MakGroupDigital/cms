
import React from 'react';
import { Building2, Shield, Leaf, Zap, Droplet, Sun, Camera, Network, Wind, Waves } from 'lucide-react';
import { Pole, Stat, TeamMember } from './types';

export const CONTACT_INFO = {
  phone: "+243 895 787 511",
  email: "cmsurgencenet@gmail.com",
  address: "2, Avenue de l'école, Q/Brikin, C/Ngaliema, Kinshasa, RDC",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.50892404113!2d15.244349475962835!3d-4.352467946979606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a31063990391d%3A0x6731e84a7e934a3b!2sNgaliema%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1715873245671!5m2!1sfr!2scd"
};

export const POLES: Pole[] = [
  {
    id: "infrastructure",
    title: "Pôle Infrastructure & Énergie",
    icon: <Building2 size={32} />,
    desc: "Développement durable et construction pour l'avenir de la RDC.",
    longDesc: "Nous concevons et réalisons des infrastructures critiques allant du BTP à la gestion des ressources hydrauliques et énergétiques.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Construction BTP & Ponts",
      "Forage d'eau (Hydraulique)",
      "Énergie Solaire & Électricité",
      "Froid Industriel & Morgues",
      "Plomberie Générale"
    ]
  },
  {
    id: "technologie",
    title: "Pôle Technologie & Sécurité",
    icon: <Shield size={32} />,
    desc: "Solutions de pointe pour la protection des biens et des personnes.",
    longDesc: "L'intégration technologique au service de votre sécurité physique et numérique avec des systèmes de surveillance intelligents.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Vidéosurveillance (CCTV & IP)",
      "Contrôle d'accès & Serrures",
      "Sécurité Incendie",
      "Réseaux Informatiques",
      "Téléphonie d'entreprise"
    ]
  },
  {
    id: "facility",
    title: "Pôle Facility Management",
    icon: <Leaf size={32} />,
    desc: "Gestion globale de l'environnement de travail et de vie.",
    longDesc: "Une maintenance préventive et curative de vos espaces pour garantir confort, hygiène et valorisation de votre patrimoine immobilier.",
    image: "https://images.unsplash.com/photo-1581578731522-745d05db9ad2?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Hygiène & Salubrité (Nettoyage)",
      "Aménagement Paysager (Jardinage)",
      "Gestion Immobilière",
      "Désinfection & 3D",
      "Maintenance Piscines"
    ]
  }
];

export const STATS: Stat[] = [
  { label: "Satisfaction", value: "100%", description: "Taux de satisfaction client constaté sur nos derniers projets." },
  { label: "Expertise", value: "20+", description: "Domaines de compétences couverts par nos équipes techniques." },
  { label: "Réactivité", value: "24/7", description: "Une disponibilité permanente pour les urgences techniques." },
  { label: "Projets", value: "500+", description: "Réalisations à travers le territoire national." }
];

export const TEAM: TeamMember[] = [
  { name: "Directeur Général", role: "Leadership Stratégique", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Responsable Technique", role: "Expertise & Qualité", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Coordination Logistique", role: "Efficacité Opérationnelle", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" }
];
