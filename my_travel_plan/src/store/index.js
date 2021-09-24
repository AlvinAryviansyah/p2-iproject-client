import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    baseURL: "https://alvin-tourist-help.herokuapp.com",
    places: [],
    favourites: [],
    currentPage: 1,
    currentSearch: "",
    location_id: 0,
    country: "",
    hotels: [],
    restaurants: [],
    attractions: [],
    textFromSpeech: "",
    detail: {
      name: "",
      imgURL: "",
      description: "",
      address: "",
      priceRange: "",
      lat: 0,
      long: 0
    },
    covid19: {}
  },
  mutations: {
    SET_LOGGEDIN(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_PLACES(state, payload) {
      if(this.state.currentPage == 1){
        state.location_id = payload[0].result_object.location_id
        state.country = payload[0].result_object.doubleclick_zone.split(".")[1]
      }
      state.places = payload;
    },
    SET_COVID19(state, payload){
      state.covid19 = payload
    },
    SET_HOTELS(state, payload) {
      state.hotels = payload;
    },
    SET_RESTAURANTS(state, payload) {
      state.restaurants = payload;
    },
    SET_ATTRACTIONS(state, payload) {
      state.attractions = payload;
    },
    SET_CURRENT_PAGE(state, payload) {
      if(payload == 'next'){
        state.currentPage = state.currentPage + 1;
      }else if(payload == 'previous'){
        state.currentPage = state.currentPage - 1;
      }else{
        state.currentPage = payload
      }
    },
    SET_CURRENT_SEARCH(state, payload) {
      state.currentPage = 1
      state.currentSearch = payload
    },
    SET_FAVOURITES(state, payload){
      state.favourites = payload;
    },
    SET_TEXT_FROM_SPEECH(state, payload){
      state.textFromSpeech = payload
    },
    SET_DETAIL(state, payload){
      state.detail = payload
    }
  },
  actions: {
    checkLogin({ commit }) {
      if (localStorage.getItem("access_token")) {
        commit("SET_LOGGEDIN", true);
      }
    },
    getPlaces(){
      return axios.get(`${this.state.baseURL}/places?page=${+this.state.currentPage}`);
    },
    login(context, payload){
      return axios.post(`${this.state.baseURL}/login`, payload)
    },
    register(context, payload){
      console.log(payload)
      return axios.post(`${this.state.baseURL}/register`, payload)
    },
    searchPlaces(context, payload){
      const search = payload || this.state.currentSearch
      return axios.get(`${this.state.baseURL}/places?search=${search}&page=${+this.state.currentPage}&size=6`);
    },
    getCovidData({commit}){
      axios.get(`${this.state.baseURL}/covid?country=${this.state.country}`)
      .then(res =>{
        commit('SET_COVID19', res.data)
      })
      .catch(err => console.log(err))
    },
    searchHotels(){
      return axios.get(`${this.state.baseURL}/hotels?location_id=${this.state.location_id}&page=${+this.state.currentPage}`);
    },
    searchRestaurants(){
      return axios.get(`${this.state.baseURL}/restaurants?location_id=${this.state.location_id}&page=${this.state.currentPage}`);
    },
    searchAttractions(){
      return axios.get(`${this.state.baseURL}/attractions?location_id=${this.state.location_id}&page=${+this.state.currentPage}`);
    },
    getFavourites(){
      return axios({
        method: "get",
        url: `${this.state.baseURL}/favourites`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
    },
    addFavourite(context, payload){
      console.log(payload, '<<< ini payload')
      
      return axios({
        method: "post",
        url: `${this.state.baseURL}/favourites`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        params: payload
      })
    },
    getText(context, event){
      console.log('hasil keluar')
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      console.log(transcript)
      context.commit('SET_TEXT_FROM_SPEECH', transcript)
      // this.search = transcript
      // $('#searchArea').val(transcript)
      console.log(this.search, '<<< ini search end')
    }
  },
  modules: {
  }
})
