<template>
      <div class="col-4 mb-3">
        <div class="card place-card shadow" style="width: 18rem">
          <div class="card-header">
            <h6 class="place-category">{{ item.category.name}}</h6>
          </div>
          <img
            :src="item.photo.images.medium.url"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">
              {{description}}
            </p>
            <a @click.prevent="addFavourite()" href="" class="btn btn-primary">Add To Favourite</a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Restaurant Card",
    props: ['item'],
    methods:{
      addFavourite(){
        this.$store.dispatch('addFavourite', this.item.id)
        .then(() =>{
          this.$router.push("/favourites")
        })
        .catch(err => this.$swal(err.response.data.message, "", "error"))
        }
    },
    computed:{
      description(){
        return `${this.item.address}`
      }
    }
}
</script>

<style>

</style>