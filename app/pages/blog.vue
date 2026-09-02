<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-all-posts", () =>
  queryCollection("content")
    .where("path", "LIKE", "/%")
    .order("date", "DESC")
    .select("title", "description", "date", "path")
    .all(),
);
</script>

<template>
  <section class="container-page py-12">
    <h1 class="mb-2 text-xs font-medium tracking-[0.15em] text-meta uppercase">
      Articles
    </h1>

    <PostList :posts="posts ?? []" />
  </section>
</template>
