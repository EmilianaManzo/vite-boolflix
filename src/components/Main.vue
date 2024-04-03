<script>
import {store} from '../data/store';
import CardFilm from './partials/CardFilm.vue';
import CardSeries from './partials/CardSeries.vue';
  export default {
    components:{
      CardFilm,
      CardSeries
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <main>
    <div class="container">
      <h2>FILM</h2>
      <div class="row row-col-4 py-3">
        <CardFilm
        v-for="movie in store.moviesList "
        :key="movie.id"
        :title="movie.title"
        :org_title="movie.original_title"
        :language="movie.original_language"
        :vote="movie.vote_average"
        :overview="movie.overview"
        :img="movie.poster_path"
        />
      </div>

      <h2>SERIE</h2>
      <div class="row row-col-4 py-3">
        <CardSeries />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>