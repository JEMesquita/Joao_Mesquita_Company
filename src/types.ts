export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  cnae: string;
  cnaeCode: string;
  iconName: string;
  category: string;
  highlights: string[];
  deliverables: string[];
  idealFor: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface CaseStudy {
  id: string;
  clientCategory: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  location: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: 'baixa' | 'media' | 'alta' | 'imediata';
}
