<script setup lang="ts">
import { ref } from "vue";

const experiences = ref([
  {
    achievements: [
      "Creating a series of tutorials to learn Vue.js (good practices, performance)",
    ],
    company: "Eni Editions",
    endDate: "2026-05-31",
    role: "Vue.js Instructor",
    location: "Saint-Herblain, France",
    startDate: "2025-12-01",
    techStack: [
      {
        logo: "vue.webp",
        displayName: "Vue.js",
      },
      {
        logo: "vuex.png",
        displayName: "Vuex",
      },
      {
        logo: "ts.webp",
        displayName: "TypeScript",
      },
    ],
  },
  {
    achievements: [
      "Achievement of a complete refactoring of the global authentication workflow",
      "Management of routing based on configuration and user permissions",
      "Refactoring of the user basket into a state machine system (XState)",
      "Development of the printing jobs and post-processing tasks scheduler",
      "Implementation of material batch tracking",
      "Development of a 3D part visualization tool",
      "Develop a visualisation component for the build chamber fill rate",
    ],
    company: "3YOURMIND",
    endDate: "2025-11-01",
    role: "Web Developer",
    location: "Berlin, Germany",
    startDate: "2021-02-01",
    techStack: [
      {
        logo: "vue.webp",
        displayName: "Vue.js",
      },
      {
        logo: "vuex.png",
        displayName: "Vuex",
      },
      {
        logo: "ts.webp",
        displayName: "TypeScript",
      },
      {
        logo: "xstate.webp",
        displayName: "XState",
      },
      {
        logo: "threejs.webp",
        displayName: "Three.js",
      },
      {
        logo: "3YD.webp",
        displayName: "Kotti-ui",
      },
      {
        logo: "jest.webp",
        displayName: "Jest",
      },
      {
        logo: "cypress.svg",
        displayName: "Cypress",
      },
      {
        logo: "django.webp",
        displayName: "Django",
      },
      {
        logo: "python.webp",
        displayName: "Python",
      },
      {
        logo: "docker.png",
        displayName: "Docker",
      },
      {
        logo: "git.webp",
        displayName: "Git",
      },
    ],
  },
  {
    achievements: [
      "Development of financial web applications",
      "Development of a smart contracts platform",
      "Development of trading web applications",
    ],
    company: "Lusis",
    endDate: "2019-06-30",
    role: "Frontend Engineer",
    location: "Paris, France",
    startDate: "2018-04-01",
    techStack: [
      {
        logo: "vue.webp",
        displayName: "Vue.js",
      },
      {
        logo: "vuex.png",
        displayName: "Vuex",
      },
      {
        logo: "ts.webp",
        displayName: "TypeScript",
      },
      {
        logo: "cakephp.jpg",
        displayName: "CakePHP",
      },
    ],
  },
]);
</script>

<template>
  <section id="experiences" class="container-page py-12">
    <h2 class="text-xs font-medium tracking-[0.15em] text-meta uppercase">
      Experiences
    </h2>

    <div class="mt-2 divide-y divide-rule">
      <Experience
        v-for="(exp, index) in experiences"
        :key="index"
        :experience="exp"
      />
    </div>
  </section>
</template>
