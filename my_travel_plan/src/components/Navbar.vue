<template>
    <header>
    <!-- Navbar -->
    <nav class="navbar fixed-top">
      <div class="logo">
        <h2>My Travel Plan</h2>
      </div>
      <div class="menu">
        <!-- search bar -->
        <div class="input-group justify-content-center mb-3 mt-3">
          <form @submit.prevent="searchPlaces" class="form-inline my-2 my-lg-0">
            <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>

      <div  class="logout">
          <router-link v-if="!isLoggedIn"  to="/login">SignIn</router-link>
         
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
  background-color: rgb(222, 233, 252);
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
</style>