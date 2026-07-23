export interface AccessibilityState {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  dyslexicFont: boolean;
  lineSpacing: 'normal' | 'relaxed' | 'spacious';
  highlightLinks: boolean;
  screenReaderActive: boolean;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  targetAudience: string[];
  frequency: string;
  whatsappMessage: string;
  iconName: string;
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface TccExample {
  id: string;
  situation: string;
  thoughtAutomatic: string;
  emotion: string;
  behaviorAutomatic: string;
  thoughtAlternative: string;
  emotionNew: string;
  behaviorNew: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  tag: string;
  date: string;
}

export interface FaqItem {
  id: string;
  category: 'geral' | 'consultas' | 'online';
  question: string;
  answer: string;
}
