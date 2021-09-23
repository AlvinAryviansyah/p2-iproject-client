<template>
    <header>
    <!-- Navbar -->
    <nav class="navbar fixed-top">
      <div @click.prevent="toHome()" class="logo">
        <h2> Tourists Help  <i class="fas fa-umbrella-beach"></i></h2>
      </div>
      <div class="menu">
        <!-- search bar -->
        <div class="input-group justify-content-center mb-3 mt-3">
          <button @click.prevent="listening()" class="btn btn-danger my-2 my-sm-0 rounded-circle" type="submit"><i class="fas fa-microphone"></i></button>
          <form @submit.prevent="searchPlaces" class="form-inline my-2 my-lg-0">
            <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Tell Us Your Destination?" id="searchArea" aria-label="Search">
            <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>

      <div  class="logout">
        <button class="btn btn-success my-2 my-sm-0" ><router-link style="color:white;" v-if="!isLoggedIn"  to="/login">SignIn</router-link></button>
          
         
        <button
          v-if="isLoggedIn"
          id="logout-button"
          type="button"
          class="btn btn-primary"
        >
          Log out
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition()
recognition.continous = true

export default {
  data(){
    return {
      search: ""
    }
  },
  computed:{
    isLoggedIn(){
            return this.$store.state.isLoggedIn
    }
  },
  methods:{
    signOut(){
        localStorage.clear()
        this.$store.commit('SET_LOGGEDIN', false)
    },
    searchPlaces(){
      const payload = `${this.search}`
      this.$store.commit('SET_CURRENT_SEARCH', payload)
      this.$store.dispatch('searchPlaces', payload)
      .then(res => {
        this.$store.commit('SET_PLACES', res.data)
        this.$store.dispatch('getCovidData')
        this.$router.push('/')
        this.search = ""
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
    toHome(){
      this.$router.push('/')
    },
    listening(){
      console.log('start listening')
      recognition.start()
      recognition.onresult = this.convert
    },
    convert(event){
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      console.log(transcript)
      recognition.stop()
      this.search = transcript
      this.$store.commit('SET_CURRENT_SEARCH', transcript)
      this.$store.dispatch('searchPlaces', transcript)
      .then(res => {
        this.$store.commit('SET_PLACES', res.data)
        this.$store.dispatch('getCovidData')
        this.$router.push('/')
        this.search = ""
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }
}
</script>

<style>
nav {
  display: flex;
  flex-direction: row;
  background-color: #265bbb;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
}

nav .menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu li {
  display: inline;
  list-style: none;
  margin-left: 40px;
}

nav .menu li:first-child {
  margin-left: 0px;
}

nav a {
  text-decoration: none;
  color: #000;
  font-size: large;
}

nav h2{
  color: whitesmoke
}
</style>