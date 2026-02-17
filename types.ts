
import { ReactNode } from 'react';

export interface Pole {
  id: string;
  title: string;
  icon: ReactNode;
  desc: string;
  longDesc: string;
  image: string;
  services: string[];
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
