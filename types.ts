export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}

export interface EventItem {
  id: number;
  day: string;
  month: string;
  title: string;
  description: string;
}

export enum EducationalLevel {
  INFANTIL = 'infantil',
  FUNDAMENTAL = 'fundamental',
  MEDIO = 'medio'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}