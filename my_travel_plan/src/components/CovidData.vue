<template>
      <header class="rounded-bottom">
    <!-- covid data -->
    <nav class="navbar covid-data mb-3">
      <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col" class="mt-1">Country</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Deaths</th>
      <th scope="col">Critical</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{covid.country}}</td>
      <td>{{covid.confirmed}}</td>
      <td>{{covid.deaths}}</td>
      <td>{{covid.critical}}</td>
    </tr>
  </tbody>
</table>

      
    </nav>
  </header>
</template>

<script>
export default {
    computed:{
        covid(){
            return this.$store.state.covid19
        },
        country(){
            return this.$store.state.country
        }
    }
}
</script>

<style>
.table{
  color: whitesmoke;
}

.table th, .table td{
    padding: 5px;
}

.covid-data{
    height: 75px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>