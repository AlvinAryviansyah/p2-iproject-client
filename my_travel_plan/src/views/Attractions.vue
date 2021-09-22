<template>
    <div id="show-place" class="container">
       <!-- Pagination -->
    <div class="container" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalAttractions >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  

    <!-- place -->
    <div class="row">
      <AttractionsCard v-for="item in attractions" :key="item.id" :item="item"></AttractionsCard>
    </div>

     <!-- Pagination -->
    <div class="container mb-3" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li v-if="currentPage !== 1" class="page-item">
          <a class="page-link" href=""  @click.prevent="previous()">Previous</a>
        </li>
        <li v-if="totalAttractions >= 6" class="page-item">
          <a class="page-link" href="" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </div>  
  </div>
</template>

<script>
import AttractionsCard from "../components/AttractionsCard.vue";
export default {
  created(){
    this.$store.commit('SET_CURRENT_PAGE', 1)
  this.$store.dispatch('searchAttractions')
  .then(res => {
    this.$store.commit('SET_ATTRACTIONS', res.data)
  })
  .catch(err => this.$swal(err.response.data.message, "", "error"))
  },
  components:{
      AttractionsCard
  },
  computed:{
    attractions(){
      return this.$store.state.attractions
    },
    currentPage(){
        return this.$store.state.currentPage
    },
    totalAttractions(){
      return this.$store.state.attractions.length
    }
  },
  methods:{
    previous(){
      this.$store.commit('SET_CURRENT_PAGE', 'previous')
      this.$store.dispatch('searchAttractions')
      .then(res => {
        this.$store.commit('SET_ATTRACTIONS', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
    next(){
      this.$store.commit('SET_CURRENT_PAGE', 'next')
      this.$store.dispatch('searchAttractions')
      .then(res => {
        this.$store.commit('SET_ATTRACTIONS', res.data)
      })
      .catch(err => this.$swal(err.response.data.message, "", "error"))
    }
  }
}
</script>

<style>

</style>