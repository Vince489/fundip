<template>
  <div>
    <div class="flex justify-center font-bold pb-4">
      <p class="text-2xl">{{ fighter.firstName }} {{ fighter.lastName }}</p>
    </div>

    <div class="text-center record gap-0.5 flex justify-center font-bold text-white">      
    <div class="wins bg-green-600 px-6 pb-1 rounded-l-lg">
      <p class="text-3xl">{{ fighter.wins }}</p>
    </div>
    
    <div class="losses bg-red-600 px-6 pb-1">
      <p class="text-3xl">{{ fighter.losses }}</p>
    </div>
    
    <div class="draws bg-blue-400 px-6 pb-1 rounded-r-lg">
      <p class="text-3xl">{{ fighter.draws }}</p>
    </div>  
  </div>
  </div>
  
  <div class="record gap-6 flex justify-center font-bold">      
    <div class="wins">
      <p class="text-green-600">{{ fighter.knockouts }} KOs</p>
    </div>
    
    <div class="losses">
      <p class="text-red-600">{{ fighter.lossesByKnockout }} KOs</p>
    </div>
    
    <div class="draws px-6 rounded-r-lg">
      <p class="text-white">{{ fighter.draws }}</p>
    </div>  
  </div>

  <div class="flex justify-center">
    <div class="w-52 p-1 bg-slate-600 m-2 rounded-xl">
      <img class="rounded-xl" :src="fighter.image" alt="fighter image">
    </div>
  </div>

  <div class="max-w-5xl">
    <div class="card m-10 border-4 ">
      <p>ID: {{ fighter._id }}</p>
      <p>Division: {{ fighter.weightClass }}</p>
      <p>Overall: {{ fighter.ovr }}</p>
      <p>Stance: {{ fighter.stance }}</p>      
      <p>Bouts: {{ fighter.fights }}</p>
      <p>Rounds: {{ fighter.rounds }}</p>
      <p>Nationality: {{ fighter.nationality }}</p>
      <p>Residence: {{ fighter.residence }}</p>
         
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