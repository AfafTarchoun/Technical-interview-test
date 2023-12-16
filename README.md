# Technical-interview-test
Alpha10X technical interview test and Take home assignments

# Front-end Assignemnt (LEVEL1)

## Instructions:

# 1. Assignment Overview

After completing the technical interview coding test, the next step will be implementing the following techniques:

- Search input debouncing.

# 2. Technical Requirements

You can re-use the app created during the technical interview to complete this assignment.

1. **Search input debouncing:**

a. Remove the button from the form.

b. Move the API call from the button click event to the search input change event.

c. To prevent calling the API on every key change, implement a debouncing technique to call the API only when the user finishes typing.

## Approach:

Using Vuejs components:
Improving the search functionality by implementing debouncing on the search input field. It uses lodash's _.debounce function to delay API calls until the user stops typing for a certain duration.

Template:

- The template contains an HTML form with an input field for the search term.
- The @input event triggers the debouncedSearch method whenever the input value changes.

Script:

- debouncedSearch: Uses lodash's _.debounce to create a debounced version of searchGIFs method, delaying the API call by 500ms after the user stops typing.
- searchTerm: Holds the user's input.
- searchGIFs(): An asynchronous method that fetches GIFs from the Giphy API based on the search term.
- displayGIFs(gifs): Handles displaying the retrieved GIFs on the webpage.

Functionality Changes:

- Removed the submit button.
- Implemented debouncing technique for the search input change event to prevent API calls on every keystroke.

## Getting Started

1. Clone the repository to your local machine:
```bash
git clone https://github.com/AfafTarchoun/Technical-interview-test.git
cd Technical-interview-test/technical-interview
```
2. Switch to Assignment level 1 branch:
```bash
git checkout AssignmentLVL1
```
3. Install dependencies:
```bash
npm install
```
4. Run the vue project:
```bash
npm run serve
```
