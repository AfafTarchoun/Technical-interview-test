# Technical-interview-test
Alpha10X technical interview test and Take home assignments

# Front-end Assignemnt (LEVEL2)

## Instructions:

# 1. Assignment Overview

After completing the technical interview coding test, the next step will be implementing the following techniques:

- Search input debouncing.
- Caching API response.

# 2. Technical Requirements

You can re-use the app created during the technical interview to complete this assignment.

1. **Search input debouncing:**

a. Remove the button from the form.

b. Move the API call from the button click event to the search input change event.

c. To prevent calling the API on every key change, implement a debouncing technique to call the API only when the user finishes typing.

2. **Caching:**

a. The user might search for the same keywork multiple times, implement a caching solution to optimize the API calls and save expensive requests.

## Approach:

Using Vuejs components:
Improving the search functionality by implementing debouncing and caching techniques. It uses lodash's _.debounce to delay API calls and stores previously fetched data in a cache to optimize repeated searches for the same keyword.
The caching solution implemented here helps optimize API calls by storing previously fetched data for repeated searches with the same keyword.

Template:

- The template contains an HTML form with an input field for the search term.
- The @input event triggers the debouncedSearch method whenever the input value changes.

Script:

- debouncedSearch: Uses lodash's _.debounce to create a debounced version of searchGIFs method, delaying the API call by 500ms after the user stops typing.
- searchTerm: Holds the user's input.
- cache: An object to store API responses for cached searches.
- searchGIFs(): An asynchronous method that fetches GIFs from the Giphy API based on the search term.
- displayGIFs(gifs): Handles displaying the retrieved GIFs on the webpage.

Functionality Changes:

- Cached API responses to optimize repeated searches for the same keyword.

## Getting Started

1. Clone the repository to your local machine:
```bash
git clone https://github.com/AfafTarchoun/Technical-interview-test.git
cd Technical-interview-test/technical-interview
```
2. Switch to Assignment level 1 branch:
```bash
git checkout AssignmentLVL2
```
3. Install dependencies:
```bash
npm install
```
4. Run the vue project:
```bash
npm run serve
```
