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
    techStack: ["Vue.js", "Typescript"],
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
    endDate: "2026-11-01",
    role: "Web Developer",
    location: "Berlin, Germany",
    startDate: "2021-02-01",
    techStack: [
      "Vue.js",
      "Vuex",
      "XState",
      "Vue Router",
      "Three.js",
      "Kotti-ui",
      "Element-UI",
      "CSS",
      "ESLint",
      "Prettier",
      "Typescript",
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
    techStack: ["Vue.js", "CakePHP"],
  },
]);

const Experiences = defineComponent({
  props: {
    achievements: { type: Array<String>, default: [] },
    company: { type: String, default: "" },
    endDate: { type: String, default: "" },
    location: { type: String, default: "" },
    startDate: { type: String, default: "" },
    role: { type: String, default: "" },
    techStack: { type: Array<String>, default: [] },
  },
  setup(props, { slots }) {
    return {
      experiences: experiences,
    };
  },
});
</script>

<template>
  <div class="mt-10 w-full flex justify-center gap-20">
    <div style="width: 70vw">
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
