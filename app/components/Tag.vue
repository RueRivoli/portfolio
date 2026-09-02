<script setup lang="ts">
defineProps<{
  displayName: string;
  logo?: string;
}>();
</script>

<template>
  <span class="inline-flex items-center gap-1.5 text-xs text-meta">
    <NuxtImg
      v-if="logo"
      class="size-4 rounded-[3px] object-contain"
      :src="`/logos/${logo}`"
      width="16"
      height="16"
      alt=""
    />
    {{ displayName }}
  </span>
</template>
