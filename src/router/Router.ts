import { createRouter, createWebHistory } from "vue-router";
import Project from "@/components/project/Project.vue";
import Home from "@/components/Home.vue";

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects/:project', name: 'project', component: Project }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});