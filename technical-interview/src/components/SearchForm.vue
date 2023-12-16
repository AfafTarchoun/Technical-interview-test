<template>
  <form @input="debouncedSearch" class="search-form">
    <div class="input-container">
      <input type="text" v-model="searchTerm" placeholder="Enter your search term" class="search-input">
    </div>
  </form>
  <div class="gif-display">
    <div v-for="gif in gifs" :key="gif.id" class="gif-item">
      <img :src="gif.images.original.url" :alt="gif.title">
    </div>
  </div>
</template>
<script>

import _ from 'lodash'; // Import lodash library
import store from '../store'; //Import the vuex state management store

export default {
  data() {
    
    return {
      store,
      searchTerm: '', // Holds the user's search term
      cache: {} //cache object to store API response
    };
  },

  methods: {
          debouncedSearch: _.debounce(function () {
            this.$store.commit('SET_SEARCH_TERM', this.searchTerm);
            this.$store.dispatch('searchGIFs');
          }, 500),
      },

      computed: {
        gifs() {
          return this.$store.getters.getGIFs;
        },
      },
  }
</script>

<style>

/* Center the input field and place the button under it */
.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.input-container {
  margin-bottom: 10px;
}

.search-input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #5d20c0; /* Green background */
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease; /* Add a smooth animation on hover */
}

.search-button:hover {
  transform: scale(1.1); /* Increase button size on hover */
}
</style>