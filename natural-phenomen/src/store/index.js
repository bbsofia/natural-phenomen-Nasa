import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedCategory: 'Wildfires',
        categories: [],
        events: [],
        pages: 10,
        currentPage: 1,
        nextPageUrl: '',
        prevPageUrl: ''
    },

    getters: {

        selectedCategory(state) {
            return state.selectedCategory;
        },

        categories(state) {
            return state.categories;
        },

        events(state) {
            return state.events;
        },

        pages(state) {
            return state.pages;
        },

        currentPage(state) {
            return state.currentPage;
        },

        nextPage(state) {
            return state.nextPageUrl;
        },

        prevPage(state) {
            return state.prevPageUrl;
        }
    },

    mutations: {

        selectedCategory(state, data) {
            state.selectedCategory = data;
        },

        categories(state, data) {
            state.categories = data;
        },

        events(state, data) {
            state.events = data;
        },

        pages(state, data) {
            state.pages = data;
        },

        currentPage(state, page) {
            state.currentPage = page;
        },

        nextPage(state, url) {
            state.nextPageUrl = url;
        },

        prevPage(state, url) {
            state.prevPageUrl = url;
        },

    },

    actions: {
        getEvents({dispatch}) {
            dispatch('fetchEventsByUrl', 'http://127.0.0.1:8000/api/get_by_category');
        },

        fetchEventsByUrl({commit, getters}, url) {
            axios.get(url, 
            { 
                params: {
                    category: getters.selectedCategory,
                    pages: getters.pages,
                }
            })
            .then((response) => {
                commit('events', response.data.data);  
                commit('nextPage', response.data.next_page_url);  
                commit('prevPage', response.data.prev_page_url);  
                commit('currentPage', response.data.current_page);
            })
            .catch(() => {
                alert('Something went wrong');
            })
        },

        nextPage({dispatch, getters}) {
            if (getters.nextPage) {
                dispatch('fetchEventsByUrl', getters.nextPage);
            }
        },

        prevPage({dispatch, getters}) {
            if (getters.prevPage) {
                dispatch('fetchEventsByUrl', getters.prevPage);
            }
        },

        fetchCategories({commit}) {
            axios.get('http://127.0.0.1:8000/api/get_categories')
            .then((response) => { 
                commit('categories', response.data);
            })
            .catch(() => {
                alert('Something went wrong');
            });
        }
    }
})