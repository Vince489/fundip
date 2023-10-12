<template>
  <div>
    <h2>Account List</h2>
    <button @click="fetchAccounts">Fetch Accounts</button>
    <div v-if="accounts.length">
      <h3>Accounts:</h3>
      <ul>
        <li v-for="account in accounts" :key="account._id">
          {{ account }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    async fetchAccounts() {
      try {
        const response = await fetch('https://planet-virtron-api-production.up.railway.app/api/v1/account', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json(); // Corrected: Access the JSON response data
          this.accounts = data; // Corrected: Set the accounts data property
        } else {
          console.error('Error fetching accounts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    },
  },
};
</script>
