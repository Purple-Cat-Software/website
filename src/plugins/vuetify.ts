/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'purpleCat',
    themes: {
      purpleCat: {
        dark: true,
        colors: {
          primary: '#7c3aed',  // vivid purple  → v-btn, v-chip color="primary"
          secondary: '#a855f7',  // lighter purple → color="secondary"
          accent: '#f59e0b',  // amber gold
          background: '#0f0a1e',  // near-black deep space
          surface: '#1a0f30',  // dark card surface → v-card default bg
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#818cf8',
          success: '#34d399',
        },
      },
    },
  },
})
