// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'purple_cat_dark',
    themes: {

      // ── DARK theme ────────────────────────────────────────────────
      purple_cat_dark: {
        dark: true,
        colors: {
          primary: '#7c3aed',   // vivid purple
          secondary: '#a855f7',   // lighter purple
          background: '#0f0a1e',   // near-black deep space
          accent: '#f59e0b',  // amber gold
          surface: '#1a0f30',   // dark card surface
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#818cf8',
          success: '#34d399',
        },
      },

      // ── LIGHT theme ───────────────────────────────────────────────
      purple_cat_light: {
        dark: false,
        colors: {
          primary: '#7c3aed',   // same brand purple — works on light too
          secondary: '#6d28d9',   // slightly deeper for light bg contrast
          background: '#faf8ff',   // very soft lavender white
          accent: '#f59e0b',  // amber gold
          surface: '#ffffff',   // clean white cards
          error: '#dc2626',
          warning: '#d97706',
          info: '#4f46e5',
          success: '#059669',
        },
      },
    },
  },
});