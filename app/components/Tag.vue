<script setup lang="ts">
import { defineComponent, ref } from "vue";

defineProps<{
  displayName: { type: String; default: "" };
  logo: { type: String; default: undefined };
}>();

// defineComponent({
//   props: {
//     displayName: { type: String, default: "" },
//     name: { type: String, default: "" },
//   },
//   setup(props, { slots }) {
//     return {};
//   },
// });
</script>

<template>
  <div class="bg-zinc-200 px-1 py-1 flex border-1 rounded-lg">
    <NuxtImg v-if="logo" :src="`/logos/${logo}`" width="25" height="25" />
    <span class="m-auto ml-1 font-medium">{{ displayName }}</span>
  </div>
</template>

<style></style>
