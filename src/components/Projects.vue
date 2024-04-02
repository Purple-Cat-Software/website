<script setup lang="ts">
interface Project {
  name: string;
  description: string;
  pictureUri: string;
  linkUrl: string;
}

const projects: Project[] = [
  {
    name: "Purrfect Tool",
    description: "Productivity tool with incorporated notes, task and timer",
    pictureUri: "",
    linkUrl: "https://google.com"
  }
]
</script>

<template>
  <h2 class="text-center py-4" >
    Projects
  </h2>
  <v-row
    v-for="project in projects"
    :key="project.name"
  >
    <v-col cols="6">
      <v-img
        height="150"
        src="@/assets/logo.png"
      />
    </v-col>
    <v-col cols="6">
      <v-card
        append-icon="mdi-open-in-new"
        color="surface-variant"
        variant="text"
        :subtitle="project.description"
        :title="project.name"
        :href="project.linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        rounded="lg"
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

<style scoped>

</style>