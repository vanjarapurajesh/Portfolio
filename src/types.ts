export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[]; // for QuantumSecureChat screenshot carousel or simulated UI screens
}

export interface Skill {
  name: string;
  level: number; // percentage
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'cloud' | 'tools' | 'os' | 'concepts';
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  university: string;
  cgpa: number | string;
  duration?: string;
}

export interface Certification {
  title: string;
  badge?: string;
  issuer?: string;
}
