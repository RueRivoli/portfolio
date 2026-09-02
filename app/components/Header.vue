<script setup lang="ts">
// TODO: replace with your real profile URLs — these are intentionally left blank
// rather than guessed, so no icon points at someone else's account.
const socials = [
  { label: "GitHub", icon: ["fab", "github"], href: "" },
  { label: "LinkedIn", icon: ["fab", "linkedin"], href: "" },
  { label: "Bluesky", icon: ["fab", "bluesky"], href: "" },
];
</script>

<template>
  <section class="container-page pt-16 pb-4">
    <div class="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
      <img
        class="size-28 shrink-0 rounded-full object-cover"
        src="/identity-photo.jpeg"
        width="112"
        height="112"
        alt="Florent Gallois"
      />

      <div class="space-y-5">
        <div class="space-y-1.5">
          <h1 class="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Florent Gallois
          </h1>
          <p class="text-body">Frontend Engineer · Vue.js, Nuxt</p>
          <p class="text-sm text-meta">Paris, France</p>
        </div>

        <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            class="rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            href="https://calendly.com/florent-gallois"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
          <a
            class="text-sm text-body underline decoration-rule underline-offset-4 transition-colors hover:text-link"
            href="/cv.pdf"
            download
          >
            Download CV
          </a>
        </div>

        <div class="flex items-center gap-5">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="text-meta transition-colors hover:text-link"
          >
            <FontAwesomeIcon :icon="social.icon" style="font-size: 20px" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
