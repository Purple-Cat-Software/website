<script setup lang="ts">
interface Project {
  name: string;
  subtitle: string;
  description: string;
  pictureUri: string;
  linkUrl: string;
}

const projects: Project[] = [
  {
    name: "Purrfect Tool",
    subtitle: "Productivity tool with incorporated notes, task and timer",
    description: "'All-in-one' productivity tool, die de belangrijkste elementen samenvoegt in één simpele applicatie. Hierbij wil ik de gebruiker van alle gemakken voorzien en een ‘all-in-one oplossing’ aanbieden. Deze oplossing is een combinatie van notities, taken en een timer. Dit zijn de basisonderdelen die in versie 1.0 moeten komen. Daarna is het een constante doorontwikkeling van deze applicatie en deze verder uit te breiden.",
    pictureUri: "@/assets/organise-purrfect-tool.svg",
    linkUrl: "https://google.com"
  }
];

const underConstruction = () => {
  alert('Link to the application is unavailable. Due to the fact we are still developing this application.\n' +
    'The goal is to release the application during the end of the summer.')
}
</script>

<template>
  <h2 class="text-center py-4">
    Projects
  </h2>
  <v-row
    v-for="project in projects"
    :key="project.name"
  >
    <v-col cols="6">
      <v-img
        height="150"
        src="@/assets/organise-purrfect-tool.svg"
      />
    </v-col>
    <v-col cols="6">
      <v-card
        append-icon="mdi-open-in-new"
        color="surface-variant"
        variant="text"
        :subtitle="project.subtitle"
        :title="project.name"
        @click="underConstruction"
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
