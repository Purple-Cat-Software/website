<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<template>
  <section id="who" class="bg-who py-16">
    <v-container>

      <h2 class="display-font text-white mb-10" style="font-size: clamp(1.8rem, 4vw, 3rem); font-weight:700;">
        {{ route.query.title }}
      </h2>

      <v-row align="start">

        <v-col cols="12" md="6">
          <p class="text-purple-lighten-3 mb-5"
             style="font-size:1.05rem; line-height:1.85; font-weight:300;">
            Project met allemaal uitleg wat het is en wat er verder gebeurd.
          </p>
          <p class="text-purple-lighten-3"
             style="font-size:1.05rem; line-height:1.85; font-weight:300;">
            In contact komen?
          </p>

          <v-divider class="my-8" color="purple-darken-3"/>

        </v-col>
      </v-row>
    </v-container>
  </section>

</template>
