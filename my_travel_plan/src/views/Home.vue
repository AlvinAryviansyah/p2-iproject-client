<template>
  <div class="container mt-10 mb-10 homePage">
    <!-- Carousel -->
    <div id="carousel" class="carousel slide mb-5" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 mt-5"
            src="https://cdn3.f-cdn.com/contestentries/54965/9049204/52d94d007d0be_thumb900.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100 mt-5" src="https://wallpapers-hub.art/wallpaper-images/219800.jpg" alt="Second slide">
        </div>
      </div>
    </div>

    <!--Tab-->
    <div class="container mb-3">
      <ul class="nav nav-tabs">
        <li  class="nav-item">
          <router-link  class="nav-link" :class="{active: activeNav == '/'}" to="/">All Places</router-link>
        </li>
        <li  class="nav-item">
          <router-link  class="nav-link" :class="{active: activeNav == 'Hotels'}"  to="/hotels">Hotels</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" :class="{active: activeNav == 'Restaurants'}"  to="/restaurants">Restaurants</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" :class="{active: activeNav == 'Attractions'}"  to="/attractions">Attractions</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Favourites</a>
        </li>
      </ul>
    </div>

    <router-view />

  </div>
</template>

<script>

export default {
  name: "HomePage",
  computed:{
    activeNav(){
      if(this.$route.name){
        return this.$route.name
      }else{
        return this.$route.fullPath
      }
      
    }
  }
}
</script>

<style>

img {
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 200px;
}

.place-card {
  border-radius: 20px;
  margin: 10px;
  width: 300px;
  height: fit-content;
}

.show-places row{
  width: 100vh;
}

#carousel {
  margin-top: 5%;
}

#carousel img{
  height: 300px;
}

#show-places {
  background-color: whitesmoke;
  background-size: cover;
  height: max-content;
  display: flex;
}

.homePage{
  background-color: whitesmoke;
}




</style>
