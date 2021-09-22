<template>
  <div id="register" >
    <div class="card register-card" style="width: 18rem">
      <div class="card-header">
        <h2>Register</h2>
      </div>
      <div class="card-body">
        <form>
          <div class="input mb-3">
            <span class="input-group-text"><i class="fas fa-at"></i></span>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="email"
            />
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
            <input class="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div>Already have an account?</div>
        <router-link to="/login">Sign In</router-link>
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
    register(){
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
      .then(() =>{
        this.$router.push({name: 'Home'})
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }

}
</script>

<style>
#main{
    background-color: white;
}

#register{
    margin-top: 5%;
    background-image: url('https://wallpapers-hub.art/wallpaper-images/219800.jpg');
    background-size: cover;
    height: 100vh;
    display: flex;
    }

.register-card{
    margin-right: auto;
    margin-top: auto;
    margin-left: 200px;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    border-radius: 20px;
}

.card-header{
    margin-left: auto;
    margin-right: auto;
}

.card-footer{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
}

.input{
    display: flex;
    align-items: stretch;
}

#submit-button{
    display: flex;
    justify-content: center;
}
</style>