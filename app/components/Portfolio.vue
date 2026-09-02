<script setup lang="ts">
import { ref } from "vue";

const projects = ref([
  {
    name: "FluemingoApp",
    description:
      "A language learning app providing the best content for each CEFR level",
    screenshot: "fluemingo.png",
    date: "2026",
    stack: ["Nuxt.js", "Tailwind CSS", "Flutter", "Supabase"],
    link: "https://fluemingo-app.com",
  },
  {
    name: "TookanAI",
    description: "Learn a language with tailored lessons",
    screenshot: "tookanai.png",
    date: "2025",
    stack: ["Nuxt.js", "Tailwind CSS"],
    link: "https://tookanai.com",
  },
]);
</script>

<template>
  <section id="portfolio" class="container-page py-12">
    <h2 class="mb-2 text-xs font-medium tracking-[0.15em] text-meta uppercase">
      Projects in production
    </h2>

    <ul class="divide-y divide-rule border-t border-rule">
      <li v-for="project in projects" :key="project.name">
        <a
          class="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="space-y-1.5">
            <h3 class="font-medium text-ink transition-colors group-hover:text-link">
              {{ project.name }}
            </h3>
            <p class="text-sm leading-relaxed text-body">
              {{ project.description }}
            </p>
            <p class="text-xs text-meta">{{ project.stack.join(" · ") }}</p>
          </div>

          <time class="shrink-0 text-sm tabular-nums text-meta" :datetime="project.date">
            {{ project.date }}
          </time>
        </a>
      </li>
    </ul>
  </section>
</template>
