<script setup lang="ts">
import { defineComponent, ref } from "vue";

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

defineComponent({
  props: {},
  setup(props, { slots }) {
    return {
      experiences: experiences,
    };
  },
});
</script>

<template>
  <div id="experiences" class="mt-10 w-full flex justify-center gap-20">
    <div style="width: 70vw">
      <h2 class="text-3xl mb-4">Experiences</h2>
      <Experience
        v-for="(exp, index) in experiences"
        :key="index"
        :experience="exp"
      >
      </Experience>
    </div>
  </div>
</template>

<style></style>
