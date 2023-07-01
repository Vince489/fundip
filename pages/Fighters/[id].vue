<template>
  <div class="card text-center">
    <p>Fighter ID: {{ gamer.id }}</p>
    <p>{{ gamer.firstName }}</p>
    <p>{{ gamer.lastName }}</p>
    <img :src="gamer.img" alt="fighter image">
    <p>{{ gamer.wins }} Wins</p>
    <p>Earnings: ${{ gamer.balance }}</p>   
  </div>
</template>

<script setup>
  const { gamers } = defineProps(['gamer'])
  const { id } = useRoute().params
  const uri = 'https://boxer-roster-production.up.railway.app/gamers/' + id 

  // fetch fighters
  const { data: gamer } = await useFetch(uri, { key: id })
  
</script>

<style scoped>

</style>