<template>
  <div id="login" class="container">
    <div class="card login-card" style="width: 18rem">
      <div class="card-header">
        <h2>Sign In</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="login()">
          <div class="input mb-3">
            <span class="input-group-text"><i class="fas fa-at"></i></span>
            <input v-model="email" type="text" class="form-control" placeholder="email" />
          </div>
          <div class="input mb-3">
            <span class="input-group-text"><i class="fas fa-key"></i></span>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="password"
            />
          </div>
          <div class="mb-3" id="submit-button">
            <input  class="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="g-signin2" id="google-signin-button"></div>
        <div>Don't have an account?</div>
        <router-link to="/register">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods:{
    login(){
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
      .then(res =>{
        localStorage.setItem("access_token", res.data.access_token)
        this.$store.commit('SET_LOGGEDIN', true)
        this.$router.push("/")
        
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }

}
</script>

<style>
#main {
  background-color: white;
}

#login {
  margin-top: 5%;
  background-image: url("https://thumbs.dreamstime.com/b/news-computer-screen-mockup-website-newspaper-portal-internet-news-computer-screen-mockup-website-185249239.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
}

.login-card {
  margin-right: auto;
  margin-top: auto;
  margin-left: 200px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
}

.card-header {
  margin-left: auto;
  margin-right: auto;
}

.card-footer {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}

.input {
  display: flex;
  align-items: stretch;
}

#submit-button {
  display: flex;
  justify-content: center;
}
</style>