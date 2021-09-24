<template>
      <div class="col-4 mb-3">
        <div class="card place-card shadow" style="width: 18rem">
          <div class="card-header">
            <h6 class="place-category">{{item.result_type}}</h6>
          </div>
          <img
            :src="item.result_object.photo.images.medium.url"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{item.result_object.name}}</h5>
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
    props: ['item'],
    methods:{
      addFavourite(){
        const payload = {
          location_id: this.item.result_object.location_id,
          lat: this.item.result_object.latitude,
          long: this.item.result_object.longitude,
          name: this.item.result_object.name,
          imageUrl: this.item.result_object.photo.images.large.url,
          address: this.item.result_object.address,
          description: this.item.result_object.description || this.item.result_object.geo_description
        }
        this.$store.dispatch('addFavourite', payload)
        .then(() =>{
          this.$router.push("/favourites")
        })
        .catch(err => this.$swal(err.response.data.message, "", "error"))
      },
      showDetail(){
        const payload = {
          name: this.item.result_object.name,
          description: this.item.result_object.geo_description || null,
          imgURL: this.item.result_object.photo.images.large.url,
          address: this.item.result_object.address || null,
          priceRange: this.item.price || null,
          lat: this.item.latitude || this.item.result_object.latitude,
          long: this.item.longitude || this.item.result_object.longitude
        }
        this.$store.commit('SET_DETAIL', payload)
        this.$router.push('/detail')

      }
    },
    computed:{
      isLoggedIn(){
        return this.$store.state.isLoggedIn
      },
      description(){
        if(this.item.result_object.geo_description){
          return this.item.result_object.geo_description.slice(0, 50)+'...'
        }else{
          return this.item.result_object.address
        }
      }
    }
}
</script>

<style>

</style>