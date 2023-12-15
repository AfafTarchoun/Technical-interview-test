<template>
    <!-- Create a form to input the search term -->
    <form @submit.prevent="searchGIFs">
      <input type="text" v-model="searchTerm" placeholder="Enter your search term">
      <button type="submit">Search</button>
    </form>
  </template>

  <script>
  export default {
    data() {
      return {
        searchTerm: '' // Holds the user's search term
      };
    },
    methods: {
      async searchGIFs() {
            },
        }
    }
  </script>