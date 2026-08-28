<script></script>

<template>
  <div class="flex justify-center gap-20">
    <div class="">
      <img
        class="border rounded-3xl"
        src="/identity-photo.jpeg"
        width="200"
        height="200"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-around">
      <div>
        <h2 class="text-4xl">Florent Gallois</h2>
        <h3 class="mt-2">Frontend Engineer Vue.js, Nuxt</h3>
        <a href="https://calendly.com/florent-gallois">Book a Call</a>
        <a class="ml-4" href="https://calendly.com/florent-gallois"
          >Download CV</a
        >
      </div>

      <div id="social-networks" class="flex justify-around">
        <FontAwesomeIcon :icon="['fab', 'github']" style="font-size: 25px" />
        <FontAwesomeIcon :icon="['fab', 'linkedin']" style="font-size: 25px" />
        <FontAwesomeIcon :icon="['fab', 'bluesky']" style="font-size: 25px" />
        <!-- <FontAwesomeIcon :icon="['fab', 'x-twitter']" style="font-size: 25px" /> -->
      </div>
    </div>
  </div>
</template>

<style></style>
