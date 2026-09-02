<script setup lang="ts">
interface Post {
  path: string;
  title?: string;
  description?: string;
  date?: string;
}

defineProps<{ posts: Post[] }>();
</script>

<template>
  <ul class="divide-y divide-rule border-t border-rule">
    <li v-for="post in posts" :key="post.path">
      <NuxtLink
        class="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        :to="post.path"
      >
        <div class="space-y-1">
          <h3 class="font-medium text-ink transition-colors group-hover:text-link">
            {{ post.title }}
          </h3>
          <p class="text-sm leading-relaxed text-body">{{ post.description }}</p>
        </div>

        <time class="shrink-0 text-sm tabular-nums text-meta" :datetime="post.date">
          {{ formatPostDate(post.date) }}
        </time>
      </NuxtLink>
    </li>
  </ul>
</template>
