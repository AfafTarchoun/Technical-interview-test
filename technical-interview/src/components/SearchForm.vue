<template>
  <!-- Create a form to input the search term -->
  <form @input="debouncedSearch" class="search-form">
    <div class="input-container">
      <input type="text" v-model="searchTerm" placeholder="Enter your search term" class="search-input">
    </div>
  </form>
</template>

<script>
import _ from 'lodash'; // Import lodash library

export default {
  data() {
    return {
      searchTerm: '', // Holds the user's search term
      cache: {} //cache object to store API response
    };
  },
  methods: {

          // Debounce function to delay API call
          debouncedSearch: _.debounce(function () {
            if (this.searchTerm.trim() !== '') { // Check if the search term is not empty
              this.searchGIFs(); // Trigger API call
            }
          }, 500),

          //async function to search for GIF using the given API
          async searchGIFs() {
          // Prevent the form's default behavior of submitting and reloading the page
              if (this.searchTerm.trim() !== '') { // Check if the search term is not empty
                try {
                  let response;
                  if (this.cache[this.searchTerm]) {
                    // If the response is already cached, use the cached response
                    response = this.cache[this.searchTerm];
                  } else {
                    // Fetch GIFs based on the search term from API
                    response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ&q=${this.searchTerm}&limit=25&offset=0&rating=g&lang=en`);
                    // Convert the response to JSON format
                    response = await response.json().then((res) => {
                      return res.data;
                    });
                    this.cache[this.searchTerm] = response; // Cache the response
                  }
                  this.displayGIFs(response); // Display the GIFs from response
                  } catch (error) {
                      // Catching any fetching error
                      console.error('Error fetching data:', error);
                  }
              }
          },

          //Display the GIFs on the webpage
          displayGIFs(gifs) {
              // Logic to display GIFs on the webpage
              const gifContainer = document.querySelector('.gif-display');
              gifContainer.innerHTML = ''; // Clear previous results
              gifs.forEach(gif => {
                  const img = document.createElement('img');
                  img.src = gif.images.original.url;
                  img.alt = gif.title;
                  gifContainer.appendChild(img);
              });
          }
      }
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