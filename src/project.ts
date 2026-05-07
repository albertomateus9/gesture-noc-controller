export type ProjectType = 'fresnel' | 'ocr' | 'colors' | 'gesture' | 'occupancy' | 'depth' | 'benchmark' | 'telemetry';

export type ProjectConfig = {
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  deploy: boolean;
  topics: string[];
  description: string;
  accent: string;
  secondary: string;
};

export const project: ProjectConfig = {
  "slug": "gesture-noc-controller",
  "title": "Gesture NOC Controller",
  "tagline": "Privacy-safe gesture command prototype for navigating NOC dashboards without storing camera data.",
  "type": "gesture",
  "deploy": false,
  "topics": [
    "gesture-control",
    "noc",
    "mediapipe-ready",
    "computer-vision",
    "privacy-safe",
    "react",
    "typescript"
  ],
  "description": "Privacy-safe gesture command prototype for navigating NOC dashboards without storing camera data.",
  "accent": "#5f5aa2",
  "secondary": "#b86f38"
};
