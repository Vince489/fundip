<template>
  <form @submit.prevent="signup">
    <input type="text" v-model="gamerTag" placeholder="Gamer Tag" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      gamerTag: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      const response = await fetch("https://test-virtue-production.up.railway.app/gamer/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gamerTag: this.gamerTag,
          email: this.email,
          password: this.password,
        }),
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        document.cookie = `token=${data.token}; Secure; HttpOnly`;
        
        this.$router.push("/dashboard");
      } else {
        console.error("Failed to sign up");
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
