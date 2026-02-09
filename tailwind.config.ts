import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#f1f5f9',
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#0b1120'
        },
        accent: {
          DEFAULT: '#06b6d4',
          foreground: '#0b1120'
        },
        success: {
          DEFAULT: '#10b981',
          foreground: '#022c22'
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#451a03'
        },
        muted: '#1e293b',
        border: '#1e293b'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at top, rgba(59,130,246,0.28), transparent 60%)',
        'section-gradient':
          'linear-gradient(to bottom right, rgba(15,23,42,1), rgba(15,23,42,0.85))'
      },
      boxShadow: {
        'soft-xl':
          '0 22px 45px rgba(15,23,42,0.75), 0 0 0 1px rgba(15,23,42,0.9)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;

