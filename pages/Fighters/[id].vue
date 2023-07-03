<template>
  <div class="">
    <div class="card text-center">
    <p>Fighter ID: {{ fighter._id }}</p>
    <p>{{ fighter.firstName }}</p>
    <p>{{ fighter.lastName }}</p>
    <img :src="fighter.image" alt="fighter image">
    <p>{{ fighter.wins }} Wins</p>
    <p>Overall: {{ fighter.ovr }}</p>   
  </div>
  </div>
  
</template>

<script setup>
  const { fighters } = defineProps(['fighter'])
  const { id } = useRoute().params
  const uri = 'http://localhost:4005/fighters/' + id 

  // fetch fighters
  const { data: fighter } = await useFetch(uri, { key: id })
  
</script>

<style scoped>

</style>