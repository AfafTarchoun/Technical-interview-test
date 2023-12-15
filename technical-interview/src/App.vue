<template>
  <!-- The main application container -->
  <div id="app">
    <SearchForm />
    <div class="gif-display"></div>
    <!-- Displayed GIFs will be populated here -->
    <img
        v-for="gif in gifs"
        :key="gif.id"
        :src="gif.images.original.url"
        :alt="gif.title"
        class="gif-item"
      />
  </div>
</template>

<script>
// Import the SearchForm component
import SearchForm from './components/SearchForm.vue';

export default {
  components: {
    SearchForm
  }
};
</script>

<style>

/* CSS for grid layout to display GIFs */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gif-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.gif-item {
  width: 200px;
  height: auto;
}
</style>