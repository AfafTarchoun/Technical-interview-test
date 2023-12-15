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
            // Prevent the form's default behavior of submitting and reloading the page
                if (this.searchTerm.trim() !== '') { // Check if the search term is not empty
                try {
                    // Fetch GIFs based on the search term from API
                    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ&q=${this.searchTerm}&limit=25&offset=0&rating=g&lang=en`);
                    // Convert the response to JSON format
                    const data = await response.json();
                    //TO DO : display GIF function using the data
                } catch (error) {
                    // Catching any fetching error
                    console.error('Error fetching data:', error);
                }
                }
            },
        }
    }
  </script>