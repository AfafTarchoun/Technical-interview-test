# Technical-interview-test
Alpha10X technical interview test and Take home assignments

# First technical test

## Instructions:

### Create an HTML Form

- Create a basic HTML form that contains a text input field and a submit button.
- The user should be able to enter a search term into the text input field.
- When the user clicks on the submit button, it should prevent the default form submission behavior and trigger a JavaScript function instead.

### JavaScript Function to Call the Giphy API

- This function should call the Giphy API and retrieve GIFs based on the search term the user provided.

### Display the GIF Images

- Once the GIFs are retrieved from the Giphy API, display them on the webpage.
- The GIFs should be displayed in a grid format, use CSS to achieve this. You can use flexbox or CSS grid for this task.

### Resources

- Giphy API Documentation : https://developers.giphy.com/docs/api/
- Giphy API endpoint :
https://api.giphy.com/v1/gifs/search?api_key={API_KEY}&q={QUERY}&limit=25&offset=0&rating=g&lang=enn
- Giphy API key: **UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ**

## Approach:

Using Vuejs components:

Template:

- The template contains an HTML form with an input field for the search term and a submit button.
- When the form is submitted (@submit.prevent="searchGIFs"), it triggers the searchGIFs method.
- The input field is bound to searchTerm using v-model.

Script:

- searchTerm: Holds the user's input.
- searchGIFs(): An asynchronous method that fetches GIFs from the Giphy API based on the search term.
- displayGIFs(gifs): Handles displaying the retrieved GIFs on the webpage.

Styling:

- The form and its elements are styled using flexbox for layout and basic styles for input fields and buttons.
- The search button has a hover effect to increase its size.

## Getting Started

1. Clone the repository to your local machine:
```bash
git clone https://github.com/AfafTarchoun/Technical-interview-test.git
cd Technical-interview-test/technical-interview
```
2. Install dependencies:
```bash
npm install
```
3. Run the vue project:
```bash
npm run serve
```
