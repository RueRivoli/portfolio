<script setup lang="ts">
import { defineComponent, ref } from "vue";

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

const { data: posts } = await useAsyncData("home-latest-posts", () =>
  queryCollection("content")
    .where("path", "LIKE", "/%")
    .order("date", "DESC")
    .limit(3)
    .select("title", "description", "date", "path")
    .all(),
);

defineComponent({
  props: {},
  async setup(props, { slots }) {
    const { data: home } = await useAsyncData(() =>
      queryCollection("content").path("/").first(),
    );
    return {
      data: home,
    };
  },
});
</script>

<template>
  <div class="mt-10 w-full flex justify-center gap-20">
    <div style="width: 70vw">
      <h2 class="text-3xl mb-2">Derniers articles de Blog</h2>
      <!-- <ContentRenderer v-if="home" :value="home" /> -->

      <div class="grid grid-cols-3 gap-3">
        <div
          class="p-2 border-1 rounded-lg"
          v-for="post in posts"
          :key="post.path"
        >
          <NuxtLink class="" :to="post.path">
            <h3 class="font-semibold mb-2">{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <time :datetime="post.date">
              {{ post.date }}
            </time>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
