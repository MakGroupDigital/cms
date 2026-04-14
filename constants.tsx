
import React from 'react';
import { Building2, Shield, Leaf, Zap, Droplet, Sun, Camera, Network, Wind, Waves, Fuel } from 'lucide-react';
import { Pole, Stat, TeamMember } from './types';

export const CONTACT_INFO = {
  phone: "+243 895 787 511",
  email: "cmsurgencenet@gmail.com",
  address: "179, Av: Kabambare Q. Nganalokole Réf: Rond point Huillerie. Kinshasa, RDC",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.50892404113!2d15.244349475962835!3d-4.352467946979606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a31063990391d%3A0x6731e84a7e934a3b!2sNgaliema%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1715873245671!5m2!1sfr!2scd"
};

export const POLES: Pole[] = [
  {
    id: "infrastructure",
    title: "Pôle Infrastructure & Énergie",
    icon: <Building2 size={32} />,
    desc: "Développement durable et construction pour l'avenir de la RDC.",
    longDesc: "Nous concevons et réalisons des infrastructures critiques allant du BTP à la gestion des ressources hydrauliques et énergétiques.",
    image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
    services: [
      "Construction BTP & Ponts",
      "Forage d'eau (Hydraulique)",
      "Énergie Solaire & Électricité",
      "Froid Industriel & Morgues",
      "Climatisation Industrielle",
      "Plomberie Générale",
      "Systèmes de Refroidissement"
    ]
  },
  {
    id: "technologie",
    title: "Pôle Technologie & Sécurité",
    icon: <Shield size={32} />,
    desc: "Solutions de pointe pour la protection des biens et des personnes.",
    longDesc: "L'intégration technologique au service de votre sécurité physique et numérique avec des systèmes de surveillance intelligents.",
    image: "https://images.pexels.com/photos/3807505/pexels-photo-3807505.jpeg?auto=compress&cs=tinysrgb&w=600",
    services: [
      "Vidéosurveillance (CCTV & IP)",
      "Contrôle d'accès & Serrures",
      "Sécurité Incendie",
      "Réseaux Informatiques",
      "Téléphonie d'entreprise",
      "Climatisation Bureaux & Serveurs",
      "Systèmes de Ventilation Intelligents"
    ]
  },
  {
    id: "facility",
    title: "Pôle Facility Management",
    icon: <Leaf size={32} />,
    desc: "Gestion globale de l'environnement de travail et de vie.",
    longDesc: "Une maintenance préventive et curative de vos espaces pour garantir confort, hygiène et valorisation de votre patrimoine immobilier.",
    image: "https://images.pexels.com/photos/3807514/pexels-photo-3807514.jpeg?auto=compress&cs=tinysrgb&w=600",
    services: [
      "Hygiène & Salubrité (Nettoyage)",
      "Traitement Insalubrité & Désinfection",
      "Aménagement Paysager (Jardinage)",
      "Gestion Immobilière",
      "Désinfection & 3D",
      "Maintenance Piscines",
      "Climatisation Commerciale",
      "Confort Thermique & Qualité de l'Air"
    ]
  },
  {
    id: "carburant",
    title: "Pôle Distribution & Livraison de Carburant",
    icon: <Fuel size={32} />,
    desc: "Solutions logistiques complètes pour l'approvisionnement en carburant.",
    longDesc: "Nous assurons la distribution et la livraison de carburant de qualité supérieure avec une flotte moderne et sécurisée. Notre expertise couvre l'approvisionnement en essence, diesel et autres produits pétroliers pour les entreprises, institutions et particuliers à travers la RDC.",
    image: "https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=600",
    services: [
      "Livraison Essence & Diesel",
      "Approvisionnement en Carburant",
      "Transport Sécurisé de Produits Pétroliers",
      "Gestion de Stocks & Inventaires",
      "Maintenance de Citernes",
      "Conformité Normes Environnementales",
      "Service de Ravitaillement d'Urgence",
      "Contrats d'Approvisionnement Long Terme"
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
  { name: "Joël Mutumoya", role: "Leadership Stratégique", image: "/Photo DG.jpeg" },
  { name: "Charmant Nyungu", role: "Consultant Permanent Expert en Tech et Innovation", image: "/photo M.Charlant Nyungu K.jpg", link: "https://charmantnyungu.com", email: "consultant@charmantnyungu.com" },
  { name: "Prisca Nkondi", role: "Directrice Executive", image: "/directrice.jpeg" }
];
