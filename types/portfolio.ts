export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
}

export interface Project {
  id: string;
  title: string;
  category?: string;
  slug: string;
  tagline: string;
  description: string;
  architecture: string;
  challenge: string;
  solution: string;
  metrics?: string | ProjectMetric[];
  techStack: string[];
  links: ProjectLinks;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EngineerProfile {
  name: string;
  role: string;
  location: string;
  status: string;
  bio: string;
  links: {
    github: string;
    email?: string;
    linkedin?: string;
  };
}
