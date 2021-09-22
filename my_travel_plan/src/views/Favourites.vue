<template>
      
    <div class="row">
      <FavouriteCard v-for="item in favourites" :key="item.id" :item="item"></FavouriteCard>
    </div>
</template>

<script>
import FavouriteCard from "../components/FavCard.vue";
export default {
    created(){
        this.$store.dispatch('getFavourites')
        .then(res => {
            this.$store.commit('SET_FAVOURITES', res.data)
        })
        .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
    components:{
        FavouriteCard
    },
    computed:{
        favourites(){
            return this.$store.state.favourites
        }
    }
}
</script>

<style>

</style>