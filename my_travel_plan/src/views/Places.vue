<template>
    <div id="show-place" class="container">
       <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalPlaces >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  

    <!-- place -->
    <div class="row">
      <PlaceCard v-for="item in places" :key="item.id" :item="item"></PlaceCard>
    </div>

     <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalPlaces >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  
  </div>
</template>

<script>
import PlaceCard from "../components/PlaceCard.vue";
export default {
  created(){
  this.$store.commit('SET_CURRENT_PAGE', 1)
  this.$store.dispatch('searchPlaces')
  .then(res => {
    this.$store.commit('SET_PLACES', res.data)
  })
  .catch(err => this.$swal(err.response.data.message, "", "error"))
  },
  components:{
      PlaceCard
  },
  computed:{
    places(){
      return this.$store.state.places
    },
    currentPage(){
        return this.$store.state.currentPage
    },
    totalPlaces(){
      return this.$store.state.places.length
    }
  },
  methods:{
    previous(){
      this.$store.commit('SET_CURRENT_PAGE', 'previous')
      this.$store.dispatch('searchPlaces')
      .then(res => {
        this.$store.commit('SET_PLACES', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
    next(){
      this.$store.commit('SET_CURRENT_PAGE', 'next')
      this.$store.dispatch('searchPlaces')
      .then(res => {
        this.$store.commit('SET_PLACES', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }
}
</script>

<style>

</style>