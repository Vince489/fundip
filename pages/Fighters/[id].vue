<template>
  <div class="flex max-w-5xl">
    <div class="max-w-md p-6 bg-slate-600 m-12 rounded-xl">
      <img :src="fighter.image" alt="fighter image">
    </div>
    <div class="card text-center border-4 ">
      <p>Fighter ID: {{ fighter._id }}</p>
      <p>{{ fighter.firstName }}</p>
      <p>{{ fighter.lastName }}</p>
    <p>{{ fighter.wins }} Wins</p>
    <p>Overall: {{ fighter.ovr }}</p>   
  </div>
  </div>
  
</template>

<script setup>
  const { fighters } = defineProps(['fighter'])
  const { id } = useRoute().params
  const uri = 'https://virtron-production.up.railway.app/fighters/' + id 

  // fetch fighters
  const { data: fighter } = await useFetch(uri, { key: id })
  
</script>

<style scoped>

</style>