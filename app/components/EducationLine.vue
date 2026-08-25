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
  <div class="">
    <div class="">
      <div>
        <h2>
          <FontAwesomeIcon
            :icon="['far', 'arrow-turn-down-right']"
            style="font-size: 15px"
          />
          {{ education.title }}
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
        <span>{{ education.school }}</span>
      </h3>
      <div>
        <h3>{{ education.startDate }} - {{ education.endDate }}</h3>
      </div>
    </div>
    <ul class="p-8">
      <li v-for="(tp, index) in education.topics" :key="index">
        {{ tp }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: circle;
}
</style>
