// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: '',
    cache: {},
    gifs: [],
  },
  mutations: {
    SET_SEARCH_TERM(state, term) {
      state.searchTerm = term;
    },
    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    },
    CACHE_RESPONSE(state, { term, response }) {
      Vue.set(state.cache, term, response);
    },
  },
  actions: {
    async searchGIFs({ state, commit }) {
      const term = state.searchTerm.trim();
      if (term !== '') {
        try {
          let response;
          if (state.cache[term]) {
            response = state.cache[term];
          } else {
            response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=UC6QeKH1sTZwo7OgHc1oAJJu4JFV59TJ&q=${term}&limit=25&offset=0&rating=g&lang=en`);
            response = await response.json().then((res) => res.data);
            commit('CACHE_RESPONSE', { term, response });
          }
          commit('SET_GIFS', response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    },
  },
  getters: {
    getGIFs: (state) => state.gifs,
  },
});
