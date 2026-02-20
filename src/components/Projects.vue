<script setup lang="ts">
const projects = [
  {
    id: 1,
    name: 'NovaDash Analytics',
    tag: 'Web App',
    tagColor: 'primary',
    emoji: '📊',
    bgClass: 'proj-bg-1',
    description: 'A real-time analytics dashboard for SaaS businesses, turning raw data into actionable visual insights with zero configuration.',
    url: '#nova-dash',
  },
  {
    id: 2,
    name: 'Felis Commerce',
    tag: 'E-Commerce',
    tagColor: 'amber',
    emoji: '🛍️',
    bgClass: 'proj-bg-2',
    description: 'A headless commerce platform built for scale — lightning-fast storefronts with deep personalisation and seamless payment flows.',
    url: '#felis-commerce',
  },
  {
    id: 3,
    name: 'Velvet CRM',
    tag: 'SaaS',
    tagColor: 'secondary',
    emoji: '🤝',
    bgClass: 'proj-bg-3',
    description: 'A CRM that makes sales teams smile. AI suggestions, automation-first workflows, and a pipeline view anyone can master in minutes.',
    url: '#velvet-crm',
  },
  {
    id: 4,
    name: 'Purr Mobile',
    tag: 'Mobile', tagColor: 'info',
    emoji: '📱', bgClass: 'proj-bg-4',
    description: 'Cross-platform mobile apps crafted with React Native. Native performance, pixel-perfect UI, and delivered reliably on time.',
    url: '#purr-mobile',
  },
  {
    id: 5, name: 'Whisker AI', tag: 'AI / ML', tagColor: 'success',
    emoji: '🤖', bgClass: 'proj-bg-5',
    description: 'An intelligent document processing engine that reads, classifies, and extracts structured data from unstructured PDFs at scale.',
    url: '#whisker-ai',
  },
  {
    id: 6, name: 'CloudPaw DevOps', tag: 'Infrastructure', tagColor: 'warning',
    emoji: '☁️', bgClass: 'proj-bg-6',
    description: 'Infrastructure-as-code tooling and CI/CD pipelines that reduce deployment risk and get your team shipping with confidence.',
    url: '#cloudpaw',
  },
]
</script>

<template>
  <div class="divider-amber"></div>
  <section id="projects" class="bg-projects py-16">
    <v-container>

      <v-chip color="primary" variant="tonal" size="small" label class="mb-5">
        Our Work
      </v-chip>

      <h2 class="display-font text-white mb-10"
          style="font-size: clamp(1.8rem, 4vw, 3rem); font-weight:700;">
        Projects
      </h2>

      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12" sm="6" lg="4"
        >
          <!-- v-card as a clickable anchor -->
          <v-card
            class="project-card h-100"
            color="surface"
            rounded="xl"
            elevation="4"
            :href="project.url"
            target="_blank"
          >
            <!-- Placeholder image area -->
            <div
              :class="['d-flex align-center justify-center', project.bgClass]"
              style="height:200px; font-size:60px;"
            >
              {{ project.emoji }}
            </div>

            <v-card-item>
              <template #prepend>
                <v-chip
                  :color="project.tagColor"
                  variant="tonal"
                  size="x-small"
                  label
                  class="mr-2"
                >
                  {{ project.tag }}
                </v-chip>
              </template>
            </v-card-item>

            <v-card-title class="display-font text-white px-4"
                          style="font-size:1.2rem; white-space:normal; line-height:1.3;">
              {{ project.name }}
            </v-card-title>

            <v-card-text class="text-purple-lighten-3"
                         style="font-size:.9rem; line-height:1.7; font-weight:300;">
              {{ project.description }}
            </v-card-text>

            <v-card-actions class="px-4 pb-5">
              <v-btn
                color="amber"
                variant="text"
                append-icon="mdi-arrow-right"
                size="small"
              >
                View Project
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
