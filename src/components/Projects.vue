<script setup lang="ts">
const projects = [
  {
    id: 1,
    name: 'Kit Task',
    tag: 'Saas',
    tagColor: 'primary',
    emoji: '📊',
    bgClass: 'proj-bg-1',
    description: 'Productivity tool to keep track of your notes, tasks and timers. Primarily focussed on privacy and simplicity. All the data is stored and hosted in the EU.',
    url: '#kit-tasks',
  },
  {
    id: 2,
    name: 'Waiting Room Software',
    tag: 'Custom Software',
    tagColor: 'amber',
    emoji: '📺',
    bgClass: 'proj-bg-2',
    description: 'Custom software created for an Eye Clinic based in The Netherlands. Goals is to display general information about the clinic, news, weather information and more.',
    url: '#waiting-room-software',
  },
  {
    id: 3,
    name: 'Kit Utility',
    tag: 'Web App',
    tagColor: 'secondary',
    emoji: '🛠️',
    bgClass: 'proj-bg-3',
    description: 'Some custom utility tools which can be freely used. Some of the tools provided: Inss generator, BSN generator and A-number generator.',
    url: '#utilities',
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
