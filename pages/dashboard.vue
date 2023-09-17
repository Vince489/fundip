<template>
  <div>
    <h1>Welcome {{ gamerTag }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamerTag: null,
    };
  },
  mounted() {
    // Retrieve the authenticatedGamer data from sessionStorage
    const authenticatedGamerData = sessionStorage.getItem('authenticatedGamer');

    // Parse the JSON data if it exists
    if (authenticatedGamerData) {
      const authenticatedGamer = JSON.parse(authenticatedGamerData);

      // Extract the gamerTag and set it in the component's data
      this.gamerTag = authenticatedGamer.gamerTag;
    }
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
