<script setup lang="ts">
interface Experience {
  achievements?: string[];
  company: string;
  endDate?: string;
  location?: string;
  startDate?: string;
  role?: string;
  techStack?: Array<{ logo: string; displayName: string }>;
}

defineProps<{ experience: Experience }>();
</script>

<template>
  <article class="grid grid-cols-1 gap-2 py-8 md:grid-cols-[8rem_1fr] md:gap-8">
    <p class="text-sm tabular-nums text-meta md:pt-1">
      {{ formatDateRange(experience.startDate, experience.endDate) }}
    </p>

    <div class="space-y-3">
      <div class="space-y-1">
        <h3 class="text-lg font-medium text-ink">{{ experience.role }}</h3>
        <p class="text-sm text-meta">
          {{ experience.company
          }}<template v-if="experience.location"> · {{ experience.location }}</template>
        </p>
      </div>

      <ul
        v-if="experience.achievements?.length"
        class="ml-4 list-disc space-y-1.5 text-[15px] leading-relaxed text-body marker:text-rule"
      >
        <li v-for="(ac, index) in experience.achievements" :key="index">
          {{ ac }}
        </li>
      </ul>

      <div
        v-if="experience.techStack?.length"
        class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1"
      >
        <Tag
          v-for="(st, index) in experience.techStack"
          :key="index"
          :logo="st.logo"
          :display-name="st.displayName"
        />
      </div>
    </div>
  </article>
</template>
