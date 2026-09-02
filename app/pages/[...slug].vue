<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryCollection("content").path(route.path).first(),
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
    fatal: true,
  });
}
</script>

<template>
  <article v-if="post" class="container-page py-12">
    <NuxtLink
      class="text-sm text-meta transition-colors hover:text-link"
      to="/blog"
    >
      ← Articles
    </NuxtLink>

    <h1 class="mt-6 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
      {{ post.title }}
    </h1>
    <time class="mt-2 block text-sm tabular-nums text-meta" :datetime="post.date">
      {{ formatPostDate(post.date) }}
    </time>

    <div class="prose-editorial mt-10 border-t border-rule pt-10">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>

<style scoped>
.prose-editorial :deep(h2) {
  color: var(--color-ink);
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
}

.prose-editorial :deep(h3) {
  color: var(--color-ink);
  font-size: 1.0625rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.prose-editorial :deep(p) {
  color: var(--color-body);
  font-size: 15px;
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.prose-editorial :deep(ul),
.prose-editorial :deep(ol) {
  color: var(--color-body);
  font-size: 15px;
  line-height: 1.75;
  margin-bottom: 1.25rem;
  padding-left: 1.25rem;
}

.prose-editorial :deep(ul) {
  list-style-type: disc;
}

.prose-editorial :deep(ol) {
  list-style-type: decimal;
}

.prose-editorial :deep(li) {
  margin-bottom: 0.375rem;
}

.prose-editorial :deep(li::marker) {
  color: var(--color-rule);
}

.prose-editorial :deep(a) {
  color: var(--color-link);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.prose-editorial :deep(strong) {
  color: var(--color-ink);
  font-weight: 600;
}

.prose-editorial :deep(blockquote) {
  border-left: 2px solid var(--color-rule);
  color: var(--color-meta);
  font-style: italic;
  margin-bottom: 1.25rem;
  padding-left: 1rem;
}

.prose-editorial :deep(code) {
  background-color: color-mix(in oklab, var(--color-meta) 12%, transparent);
  border-radius: 4px;
  font-size: 0.875em;
  padding: 0.15em 0.4em;
}

.prose-editorial :deep(pre) {
  border: 1px solid var(--color-rule);
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 1.25rem;
  overflow-x: auto;
  padding: 1rem;
}

.prose-editorial :deep(pre code) {
  background: none;
  padding: 0;
}
</style>
