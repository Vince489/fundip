<template>

  

<div class="container mt-10 justify-center gap-6 flex flex-wrap">
  <div v-for="f in fighters" :key="f._id"> 
    <Fighters :fighter="f" />
  </div>
</div>



</template>

<script setup>

// fetch the gamer
const { data: fighters } = await useFetch('http://localhost:4005/fighters')
</script>

<style scoped>

</style>