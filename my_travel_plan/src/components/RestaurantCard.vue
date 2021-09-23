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
            <a @click.prevent="showDetail()" href="" class="btn btn-primary">Show Detail</a>
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
      },
      showDetail(){
        const payload = {
          name: this.item.name,
          description: this.item.description || null,
          imgURL: this.item.photo.images.large.url,
          address: this.item.address ||null,
          priceRange: this.item.price || null,
          lat: this.item.latitude || this.item.result_object.latitude,
          long: this.item.longitude || this.item.result_object.longitude
        }
        this.$store.commit('SET_DETAIL', payload)
        this.$router.push('/detail')
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