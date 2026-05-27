export interface RiskItem {
  id: string;
  name: string;
  probability: 'LOW' | 'MEDIUM' | 'HIGH' | 'MAXIMUM';
  impact: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
  mitigation: string;
}

export interface DatePackage {
  id: string;
  title: string;
  tagline: string;
  atmosphere: string;
  duration: string;
  highlights: string[];
  roiRating: string;
  costEstimate: string;
}

export interface KPIProfile {
  label: string;
  value: number;
  max: number;
  unit: string;
  description: string;
  iconName: string;
}
