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
  "title": "Controlador NOC Por Gestos",
  "description": "Prototipo seguro para comandar paineis de NOC por gestos sem armazenar camera ou identificar pessoas.",
  "topics": [
    "gesture-control",
    "noc",
    "mediapipe-ready",
    "computer-vision",
    "privacy-safe",
    "react",
    "typescript",
    "gestos",
    "visao-computacional",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica",
    "telecomunicacoes"
  ],
  "deploy": true,
  "tagline": "Comandos por gestos para navegacao em dashboards operacionais com foco em privacidade.",
  "type": "gesture",
  "accent": "#5f5aa2",
  "secondary": "#b86f38"
};
