
<script setup lang="ts">
import { ref } from 'vue'
import kitTask from "@/assets/personal-files.svg"
import waitingRoom from "@/assets/waiting-room.svg"
import utility from "@/assets/utility-tool.svg"

const expandedId = ref<number | null>(null)

function toggleCard(id: number) {
  expandedId.value = expandedId.value === id ? null : id
}

const projects = [
  {
    id: 1,
    name: 'Kit Task',
    tag: 'Saas',
    tagColor: 'primary',
    picture: kitTask,
    bgClass: 'proj-bg-1',
    description: 'Productivity tool to keep track of your notes, tasks and timers. Primarily focussed on privacy and simplicity. All the data is stored and hosted in the EU.',
    url: '#kit-tasks',
    details: 'Kit Task is designed with a clean, distraction-free interface to help you stay on top of your day. Built with a privacy-first approach, no data ever leaves EU borders.',
    contact: { email: 'kittask@example.com', phone: '+31 20 000 0001' },
  },
  {
    id: 2,
    name: 'Interactive Waiting Room Solution',
    tag: 'Custom Software',
    tagColor: 'amber',
    picture: waitingRoom,
    bgClass: 'proj-bg-2',
    description: 'Custom software created for an Eye Clinic based in The Netherlands. Goals is to display general information about the clinic, news, weather information and more.',
    url: '#waiting-room-software',
    details: 'Built specifically for healthcare environments, the solution displays real-time news feeds, local weather, and clinic announcements on a seamless touch-friendly interface.',
    contact: { email: 'waitingroom@example.com', phone: '+31 20 000 0002' },
  },
  {
    id: 3,
    name: 'Kit Utility',
    tag: 'Web App',
    tagColor: 'secondary',
    picture: utility,
    bgClass: 'proj-bg-3',
    description: 'Some custom utility tools which can be freely used. Some of the tools provided: Inss generator, BSN generator and A-number generator.',
    url: '#utilities',
    details: 'Kit Utility is a free, open-access toolset for developers and administrators. All tools run client-side — nothing is sent to a server.',
    contact: { email: 'utility@example.com', phone: '+31 20 000 0003' },
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
          <v-card
            class="project-card h-100"
            color="surface"
            rounded="xl"
            elevation="4"
            style="cursor: pointer;"
            @click="toggleCard(project.id)"
          >
            <!-- Placeholder image area -->
            <v-img
              :class="['d-flex align-center justify-center', project.bgClass]"
              style="height:220px;"
              :src="project.picture"
            />

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
              <template #append>
                <v-icon
                  :color="project.tagColor"
                  size="18"
                  style="transition: transform 0.3s ease;"
                  :style="expandedId === project.id ? 'transform: rotate(180deg)' : ''"
                >
                  mdi-chevron-down
                </v-icon>
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

            <!-- Expandable subsection -->
            <v-expand-transition>
              <div v-if="expandedId === project.id">
                <v-divider color="purple-darken-3" class="mx-4" />

                <v-card-text class="pt-4">
                  <p class="text-purple-lighten-3 mb-4"
                     style="font-size:.9rem; line-height:1.7; font-weight:300;">
                    {{ project.details }}
                  </p>

                  <div class="text-purple-lighten-3" style="font-size:.85rem;">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="amber" size="16" class="mr-2">mdi-email-outline</v-icon>
                      <span>{{ project.contact.email }}</span>
                    </div>
                    <div class="d-flex align-center">
                      <v-icon color="amber" size="16" class="mr-2">mdi-phone-outline</v-icon>
                      <span>{{ project.contact.phone }}</span>
                    </div>
                  </div>
                </v-card-text>
              </div>
            </v-expand-transition>

            <v-card-actions class="px-4 pb-5">
              <v-btn
                color="amber"
                variant="text"
                append-icon="mdi-arrow-right"
                size="small"
                :href="project.url"
                target="_blank"
                @click.stop
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