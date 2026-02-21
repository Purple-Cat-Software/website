<script setup lang="ts">
import logo from '@/assets/pcsw-cat-only.png';
</script>

<template>
  <v-footer class="footer-bar py-10 d-flex flex-column align-center">
    <v-avatar size="64" color="primary" class="mb-3">
      <v-img :src="logo"/>
    </v-avatar>

    <span class="display-font text-white" style="font-size:1.2rem; font-weight:700;">
        Purple Cat Software
      </span>

    <v-divider class="my-5" color="primary" thickness="2" style="width:60px; opacity:.7;"/>

    <span class="text-medium-emphasis" style="font-size:.85rem;">
        © 2026 Purple Cat Software — All rights reserved
      </span>
  </v-footer>
</template>

