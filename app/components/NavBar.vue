<script setup lang="ts">
const links = [
  { to: "/#experiences", label: "Experiences" },
  { to: "/#portfolio", label: "Portfolio" },
  { to: "/#education", label: "Education" },
  { to: "/blog", label: "Blog" },
];
</script>

<template>
  <header class="border-b border-rule">
    <nav class="container-page flex h-14 items-center justify-between gap-4">
      <NuxtLink
        to="/"
        class="text-sm font-medium tracking-tight text-ink transition-colors hover:text-link"
      >
        FG
      </NuxtLink>

      <ul class="flex items-center gap-4 sm:gap-6">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-[13px] text-meta transition-colors hover:text-ink sm:text-sm"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
