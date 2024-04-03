<script>
import {store} from '../data/store';
import CardFilm from './partials/CardFilm.vue';
import CardSeries from './partials/CardSeries.vue';
  export default {
    components:{
      CardFilm,
      CardSeries
    }
  }
</script>

<template>
  <CardFilm />
  <CardSeries />
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>