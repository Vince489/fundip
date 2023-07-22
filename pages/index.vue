<template>

  <div class="pb-16">
    <Hero />
  </div>

  <section>

    <div class="flex justify-center pb-10">
      <h1 class="text-3xl font-semibold">IN THE SPOTLIGHT</h1>
    </div>

    <div>
      <Spotlight1 />
    </div>

    <div>
      <Spotlight2 />
    </div>

    <div>
      <Spotlight1 />
    </div>

  </section>

</template>

<script setup>
  definePageMeta({
    layout: 'home',
  })
</script>

<style scoped>

</style>