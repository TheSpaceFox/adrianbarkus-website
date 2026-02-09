import type { Config } from 'tailwindcss';

// Tailwind v4 uses CSS-based configuration via @theme in globals.css
// This config file is kept minimal for content paths only
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ]
};

export default config;

