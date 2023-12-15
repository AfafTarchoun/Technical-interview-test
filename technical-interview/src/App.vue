<template>
  <!-- The main application container -->
  <div id="app">
    <SearchForm />
    <div class="gif-display"></div>
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