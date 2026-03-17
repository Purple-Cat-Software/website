<script setup lang="ts">
const skills = [ 'Web Apps', 'DevOps', 'SaaS', 'Custom Software', 'Refactoring', 'Consultancy' ];
const stats = [
  { value: '8+', label: 'Years of Craftsmanship', icon: 'mdi-calendar-star', iconColor: 'amber' },
  {
    value: '4+',
    label: 'Projects Shipped',
    icon: 'mdi-rocket-launch-outline',
    iconColor: 'secondary'
  },
  { value: '100%', label: 'Passion-Driven Delivery', icon: 'mdi-heart-outline', iconColor: 'primary' },
];
</script>

<template>
  <div class="divider-primary"></div>
  <section id="who" class="bg-who py-16">
    <v-container>

      <!-- Section chip label -->
      <v-chip color="amber" variant="tonal" size="small" label class="mb-5">
        About Us
      </v-chip>

      <h2 class="display-font section-heading mb-10"
          style="font-size: clamp(1.8rem, 4vw, 3rem); font-weight:700;">
        Who We Are
      </h2>

      <v-row align="start">

        <!-- Body text + skill chips -->
        <v-col cols="12" md="6">
          <p class="body-text" style="font-size:1.05rem; line-height:1.85; font-weight:300;">
            Purple Cat Software is a passionate software studio dedicated to craft <strong style="font-weight:700;">clean, simple and
            purposeful</strong> digital solutions.
            We believe great software should be <strong style="font-weight:700;">effortless</strong> — working seamlessly, delighting users, and
            stying out of the way.
          </p>
          <p class="body-text" style="font-size:1.05rem; line-height:1.85; font-weight:300;">
            🇪🇺 Our applications and data are hosted exclusively within the European Union. By choosing our services,
            you benefit from full compliance with GDPR and European data protection standards, ensuring privacy,
            security, and compliance for your business.
          </p>

          <v-divider class="my-8" color="primary" opacity="0.2" />

          <!-- Skill chips — v-chip inside a v-row/v-col grid -->
          <v-row dense>
            <v-col v-for="skill in skills" :key="skill" cols="6" sm="4">
              <v-chip
                color="primary"
                variant="tonal"
                prepend-icon="mdi-check-circle-outline"
                class="mb-2"
                size="small"
              >
                {{ skill }}
              </v-chip>
            </v-col>
          </v-row>
        </v-col>

        <!-- Stats — v-card per stat -->
        <v-col cols="12" md="6">
          <v-card
            v-for="stat in stats"
            :key="stat.label"
            class="stat-card mb-4 pa-5"
            color="surface"
            variant="tonal"
            rounded="xl"
          >
            <v-row align="center" no-gutters>
              <v-col cols="auto" class="mr-5">
                <v-icon :color="stat.iconColor" size="38">{{ stat.icon }}</v-icon>
              </v-col>
              <v-col>
                <div class="gradient-text display-font"
                     style="font-size:2.4rem; font-weight:900; line-height:1;">
                  {{ stat.value }}
                </div>
                <div class="stat-label-text mt-1" style="font-size:.85rem;">
                  {{ stat.label }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>
