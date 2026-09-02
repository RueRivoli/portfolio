<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <NavBar />

    <main class="flex-1">
      <slot />
    </main>

    <footer class="mt-16 border-t border-rule">
      <div
        class="container-page flex flex-col gap-2 py-8 text-sm text-meta sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} Florent Gallois</p>
        <p>Built with Nuxt &amp; Tailwind</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
