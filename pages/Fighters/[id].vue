<template>
  <div class="card text-center">
    <p>Fighter ID: {{ fighter._id }}</p>
    <p>{{ fighter.firstName }}</p>
    <p>{{ fighter.lastName }}</p>
    <img :src="fighter.img" alt="fighter image">
    <p>{{ fighter.wins }} Wins</p>
    <p>Earnings: ${{ fighter.ovr }}</p>   
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