<template>
    <!-- Create a form to input the search term -->
    <form @submit.prevent="searchGIFs" class="search-form">
      <div class="input-container">
        <input type="text" v-model="searchTerm" placeholder="Enter your search term" class="search-input">
      </div>
      <button type="submit" class="search-button">Search</button>
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
      //async function to search for GIF using the given API
    async searchGIFs() {
          // Prevent the form's default behavior of submitting and reloading the page
              if (this.searchTerm.trim() !== '') { // Check if the search term is not empty
                  try {
                      // Fetch GIFs based on the search term from API
                      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ&q=${this.searchTerm}&limit=25&offset=0&rating=g&lang=en`);
                      // Convert the response to JSON format
                      const data = await response.json();
                      this.displayGIFs(data.data);
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
                  const img = document.createElement('img'); //Assuming a simple display of images
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
  width: 300px; /* Adjust width as needed */
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