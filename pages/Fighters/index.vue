<template>

  

<div class="container mt-10 justify-center gap-6 flex flex-wrap">
  <div v-for="g in gamers" :key="g._id"> 
    <Fighters :gamer="g" />
  </div>
</div>



</template>

<script setup>

// fetch the gamer
const { data: gamers } = await useFetch('https://boxer-roster-production.up.railway.app/gamers')
</script>

<style scoped>

</style>