<template>
  <div class="container p-8 pt-18 flex flex-col md:flex-row justify-between items-center">
      <h1 class="text-3xl font-semibold mr-8">All Fighters</h1>
      <div class="flex flex-col md:flex-row">
        <div class="flex justify-between items-center pr-4">
          <input type="text" class="border border-gray-300 rounded-md py-2 px-4 w-full md:w-96" placeholder="Search fighters...">
        </div>
        <div class="relative mt-4 md:mt-0 md:ml-4">
          <select v-model="selectedWeightClass" class="border border-gray-300 rounded-md py-2 px-4 appearance-none w-full md:w-auto">
            <option value="">Weight Class</option>
            <option value="Super Featherweight">Super Featherweight (126-130 lbs)</option>
            <option value="Lightweight">Lightweight (130–135 lbs)</option>
            <option value="Super Lightweight">Super Lightweight (135–140 lbs)</option>
            <option value="Welterweight">Welterweight (140–147 lbs)</option>
            <option value="Super Welterweight">Super Welterweight (147–154 lbs)</option>
            <option value="Middleweight">Middleweight (154–160 lbs)</option>
            <option value="Super Middleweight">Super Middleweight (160–168 lbs)</option>
            <option value="Light Heavyweight">Light Heavyweight (168–175 lbs)</option>
            <option value="Cruiserweight">Cruiserweight (175–200 lbs)</option>
            <option value="Heavyweight">Heavyweight (200+ lbs)</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95a.999.999 0 1 0-1.41-1.41l-3.54 3.54a.999.999 0 0 0 0 1.41l3.54 3.54a.999.999 0 1 0 1.41-1.41L11.41 10l3.54-3.54z"/></svg>
          </div>
        </div>
      </div>
    </div> 

    <div class="container mt-10 justify-center gap-6 flex flex-wrap">
      <div v-for="fighter in filteredFighters" :key="fighter._id"> 
        <Fighters2 :fighter="fighter" />
      </div>
    </div>
</template>

<script>
import Fighters2 from '@/components/Fighters2.vue'

export default {
  data() {
    return {
      selectedWeightClass: '',
      fighters: []
    }
  },
  computed: {
    filteredFighters() {
      if (this.selectedWeightClass === '') {
        return this.fighters
      } else {
        return this.fighters.filter(fighter => fighter.weightClass === this.selectedWeightClass)
      }
    }
  },
  components: {
    Fighters2
  },
  mounted() {
    this.fetchFighters()
  },
  methods: {
    async fetchFighters() {
      try {
        const response = await fetch('https://virtron-production.up.railway.app/fighters')
        const data = await response.json()
        this.fighters = data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>