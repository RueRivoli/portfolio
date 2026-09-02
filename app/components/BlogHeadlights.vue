<script setup lang="ts">
const { data: posts } = await useAsyncData("home-latest-posts", () =>
  queryCollection("content")
    .where("path", "LIKE", "/%")
    .order("date", "DESC")
    .limit(3)
    .select("title", "description", "date", "path")
    .all(),
);
</script>

<template>
  <section class="container-page py-12">
    <div class="mb-2 flex items-baseline justify-between gap-4">
      <h2 class="text-xs font-medium tracking-[0.15em] text-meta uppercase">
        Writing
      </h2>
      <NuxtLink
        class="text-sm text-meta transition-colors hover:text-link"
        to="/blog"
      >
        All articles →
      </NuxtLink>
    </div>

    <PostList :posts="posts ?? []" />
  </section>
</template>
