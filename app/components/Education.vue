<script setup lang="ts">
import { defineComponent, ref } from "vue";

const education = ref([
  {
    topics: ["C Language, Graphism, Web development"],
    school: "School 42, Peer-to-peer school",
    endDate: "2018",
    title: "Formation to Computer Science",
    location: "Paris, France",
    startDate: "2016",
  },
  {
    topics: ["Operational Research, Computer Science"],
    school: "School 42, Peer-to-peer school",
    endDate: "2016",
    title: "Master’s degree in Optimisation and Operational research",
    location: "Nantes, France - Mons, Belgium",
    startDate: "2014",
  },
  {
    topics: ["Engineering"],
    school: "IMT Atlantique",
    endDate: "2014",
    title: "Formation to Engineering",
    location: "Nantes, France",
    startDate: "2012",
  },
]);

defineComponent({
  props: {},
  setup(props, { slots }) {
    return {
      education,
    };
  },
});
</script>

<template>
  <div class="mt-10 w-full flex justify-center gap-20">
    <div style="width: 70vw">
      <h2 class="text-3xl mb-2">Education</h2>
      <EducationLine
        v-for="(st, index) in education"
        :key="index"
        :education="st"
      >
      </EducationLine>
    </div>
  </div>
</template>

<style></style>
