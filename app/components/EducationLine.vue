<script setup lang="ts">
interface Education {
  topics: string[];
  school: string;
  endDate?: string;
  location?: string;
  startDate?: string;
  title: string;
}

defineProps<{ education: Education }>();
</script>

<template>
  <article class="grid grid-cols-1 gap-2 py-8 md:grid-cols-[8rem_1fr] md:gap-8">
    <p class="text-sm tabular-nums text-meta md:pt-1">
      {{ formatDateRange(education.startDate, education.endDate) }}
    </p>

    <div class="space-y-3">
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-ink">{{ education.title }}</h3>
        <p class="text-sm text-meta">
          {{ education.school
          }}<template v-if="education.location"> · {{ education.location }}</template>
        </p>
      </div>

      <ul
        v-if="education.topics?.length"
        class="ml-4 list-disc space-y-1.5 text-[15px] leading-relaxed text-body marker:text-rule"
      >
        <li v-for="(tp, index) in education.topics" :key="index">
          {{ tp }}
        </li>
      </ul>
    </div>
  </article>
</template>
