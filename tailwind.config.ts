/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#bfd6ff',
          200: '#99bbff',
          300: '#73a0ff',
          400: '#4d85ff',
          500: '#266aff',
          600: '#0A2463', // primary
          700: '#001c60',
          800: '#00144d',
          900: '#000c33',
        },
        accent: {
          50: '#fdf8e9',
          100: '#f9ecc8',
          200: '#f5dfa7',
          300: '#f1d286',
          400: '#edc665',
          500: '#E6AF2E', // accent
          600: '#d9a227',
          700: '#c49123',
          800: '#aa7f1e',
          900: '#8a6718',
        },
        secondary: {
          50: '#e6f7f7',
          100: '#c3eaea',
          200: '#a0dcdd',
          300: '#7ccfd0',
          400: '#59c1c3',
          500: '#36b4b6',
          600: '#2f9fa1',
          700: '#278a8c',
          800: '#1f7577',
          900: '#175f61',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"New York"', 'Georgia', 'serif'],
        mono: ['"SF Mono"', 'Menlo', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      }
    },
  },
  plugins: [],
};