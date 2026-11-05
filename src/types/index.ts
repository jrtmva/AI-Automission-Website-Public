export interface ServiceItem {
  id: string;
  title: string;
  category: 'Agents & Chatbots' | 'Lead Generation' | 'Operations' | 'Integrations';
  tagline: string;
  businessBenefit: string;
  technicalCapabilities: string[];
  idealFor: string;
  timeSavings: string;
  iconName: string;
}

export interface ProblemSolutionItem {
  id: string;
  problemTitle: string;
  theBottleneck: string;
  theAiSolution: string;
  businessImpact: string;
  metricBadge: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  focus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Strategy' | 'Security & Tech' | 'Pricing & ROI';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  website?: string;
  primaryBottleneck: string;
  teamSize: string;
  currentTools: string[];
  preferredDate: string;
  preferredTimeSlot: string;
  projectNotes?: string;
}
