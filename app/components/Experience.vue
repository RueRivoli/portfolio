<script setup lang="ts">
interface Experience {
  achievements?: string[];
  company: string;
  endDate?: string;
  location?: string;
  startDate?: string;
  role?: string;
  techStack?: string[];
}

defineProps<{ experience: Experience }>();
</script>

<template>
  <div class="">
    <div class="">
      <div>
        <h2>
          <FontAwesomeIcon :icon="['far', 'dot']" style="font-size: 15px" />
          {{ experience.role }}
        </h2>
      </div>
    </div>
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
    <ul class="p-8">
      <li v-for="(ac, index) in experience.achievements" :key="index">
        {{ ac }}
      </li>
    </ul>
    <ul class="p-8">
      <li v-for="(st, index) in experience.techStack" :key="index">
        {{ st }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: circle;
}
</style>
