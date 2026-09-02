<script setup lang="ts">
import { ref } from "vue";

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

</script>

<template>
  <section id="education" class="container-page py-12">
    <h2 class="text-xs font-medium tracking-[0.15em] text-meta uppercase">
      Education
    </h2>

    <div class="mt-2 divide-y divide-rule">
      <EducationLine
        v-for="(st, index) in education"
        :key="index"
        :education="st"
      />
    </div>
  </section>
</template>
