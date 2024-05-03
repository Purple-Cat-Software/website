<script setup lang="ts">
import { Project } from "../domain/Types";

const projects: Project[] = [
  {
    name: "Purrfect Tool",
    subtitle: "Productivity tool with incorporated notes, task and timer",
    description: "PurrfectTool is an application created to become the all-you-need, all-in-one productivity tool. The focus is on simplicity and an easy to use interface. This project is still a work in progress version 1.0 will be the official release.",
    linkUrl: "https://purrfecttool-dev.web.app/"
  }
];

</script>

<template>
  <h2 class="text-center py-4">
    Projects
  </h2>
  <v-row
    cols="12"
    v-for="project in projects"
    :key="project.name"
  >
    <v-col cols="3">
      <v-img
        height="150"
        src="@/assets/organise-purrfect-tool.svg"
      />
    </v-col>
    <v-col cols="9">
      <v-card
        :href="project.linkUrl"
        append-icon="mdi-open-in-new"
        color="surface-variant"
        variant="text"
        :subtitle="project.subtitle"
        :title="project.name"
        target="_blank"
        rel="noopener noreferrer"
        rounded="lg"
        :text="project.description"
      >
        <v-overlay
          opacity=".06"
          scrim="primary"
          contained
          model-value
          persistent
        />
      </v-card>
    </v-col>
  </v-row>
</template>
