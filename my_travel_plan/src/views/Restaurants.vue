<template>
    <div id="show-place" class="container">
       <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalRestaurants >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  

    <!-- place -->
    <div class="row">
      <RestaurantCard v-for="item in restaurants" :key="item.id" :item="item"></RestaurantCard>
    </div>

     <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalRestaurants >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  
  </div>
</template>

<script>
import RestaurantCard from "../components/RestaurantCard.vue";
export default {
  created(){
    this.$store.commit('SET_CURRENT_PAGE', 1)
  this.$store.dispatch('searchRestaurants')
  .then(res => {
    this.$store.commit('SET_RESTAURANTS', res.data)
  })
  .catch(err => this.$swal(err.response.data.message, "", "error"))
  },
  components:{
      RestaurantCard
  },
  computed:{
    restaurants(){
      return this.$store.state.restaurants
    },
    currentPage(){
        return this.$store.state.currentPage
    },
    totalRestaurants(){
      return this.$store.state.restaurants.length
    }
  },
  methods:{
    previous(){
      this.$store.commit('SET_CURRENT_PAGE', 'previous')
      this.$store.dispatch('searchRestaurants')
      .then(res => {
        this.$store.commit('SET_RESTAURANTS', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
    next(){
      this.$store.commit('SET_CURRENT_PAGE', 'next')
      this.$store.dispatch('searchRestaurants')
      .then(res => {
        this.$store.commit('SET_RESTAURANTS', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }
}
</script>

<style>

</style>