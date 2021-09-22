<template>
      <div class="col-4">
        <div class="card news-card" style="width: 18rem">
          <img
            :src="item.imgURL"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">
              {{item.content}}
            </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>