<template>
    <div id="show-place" class="container">
       <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalHotels >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  

    <!-- place -->
    <div class="row">
      <HotelCard v-for="item in hotels" :key="item.id" :item="item"></HotelCard>
    </div>

     <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalHotels >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  
  </div>
</template>

<script>
import HotelCard from "../components/HotelCard.vue";
export default {
  created(){
  this.$store.commit('SET_CURRENT_PAGE', 1)
  this.$store.dispatch('searchHotels')
  .then(res => {
    this.$store.commit('SET_HOTELS', res.data)
  })
  .catch(err => this.$swal(err.response.data.message, "", "error"))
  },
  components:{
      HotelCard
  },
  computed:{
    hotels(){
      return this.$store.state.hotels
    },
    currentPage(){
        return this.$store.state.currentPage
    },
    totalHotels(){
      return this.$store.state.hotels.length
    }
  },
  methods:{
    previous(){
      this.$store.commit('SET_CURRENT_PAGE', 'previous')
      this.$store.dispatch('searchHotels')
      .then(res => {
        this.$store.commit('SET_HOTELS', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
    next(){
      this.$store.commit('SET_CURRENT_PAGE', 'next')
      this.$store.dispatch('searchHotels')
      .then(res => {
        this.$store.commit('SET_HOTELS', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }
}
</script>

<style>

</style>