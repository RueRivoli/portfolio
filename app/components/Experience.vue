<script setup lang="ts">
interface Experience {
  achievements?: string[];
  company: string;
  endDate?: string;
  location?: string;
  startDate?: string;
  role?: string;
  techStack?: Array<{ logo: String; displayName: String }>;
}

defineProps<{ experience: Experience }>();
</script>

<template>
  <div class="">
    <div>
      <h2>
        <FontAwesomeIcon :icon="['far', 'dot']" style="font-size: 15px" />
        <span class="text-xl">{{ experience.role }}</span>
      </h2>
    </div>
    <div class="p-4">
      <div class="flex justify-between">
        <h3>
          <FontAwesomeIcon
            class="mr-1"
            :icon="['far', 'building']"
            style="font-size: 15px"
          />
          <span>{{ experience.company }}</span>
        </h3>
        <div>
          <h3>{{ experience.startDate }} - {{ experience.endDate }}</h3>
        </div>
      </div>
      <ul class="p-4">
        <li v-for="(ac, index) in experience.achievements" :key="index">
          {{ ac }}
        </li>
      </ul>
      <div class="flex flex-wrap gap-1 py-8 px-2">
        <div v-for="(st, index) in experience.techStack" :key="index">
          <Tag
            class="mr-2"
            :logo="st.logo"
            :display-name="st.displayName"
          ></Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: circle;
}
</style>
