/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          'primary-hover': '#00e67a',
          'primary-focus': '#00cc6d',
          'primary-active': '#00b360',
          'secondary-hover': '#4de0f5',
          'secondary-focus': '#3ad6eb',
          'secondary-active': '#27cce0',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        // Keep legacy colors for gradients that still reference them
        primary: {
          50: '#e6fff3',
          100: '#b3ffe0',
          200: '#80ffcc',
          300: '#4dffb9',
          400: '#1affa5',
          500: '#00FF87',
          600: '#00e67a',
          700: '#00cc6d',
          800: '#00b360',
          900: '#009953',
        },
        secondary: {
          50: '#e6fbff',
          100: '#b3f4ff',
          200: '#80edff',
          300: '#60EFFF',
          400: '#4de0f5',
          500: '#3ad6eb',
          600: '#27cce0',
          700: '#14c2d6',
          800: '#01b8cc',
          900: '#009eb3',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        // Keep legacy aliases
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': 'var(--glow-sm)',
        'glow-md': 'var(--glow-md)',
        'glow-lg': 'var(--glow-lg)',
        'glow-cyan': 'var(--glow-cyan)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 135, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 135, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
