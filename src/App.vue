<script>
  import axios from 'axios';
  import {store} from './data/store';
  import Header from './components/Header.vue';
  import CardsContainer from './components/CardsContainer.vue';
  import Swiper from './components/Swiper.vue';

  export default {
      components:{
        Header,
        CardsContainer,
        Swiper,
      },
      data(){
        return{
          axios,
          store
        }
      },

      methods:{
        getApi(link,type){
          axios.get(link + type , {
            params : store.queryparam
          })
            .then(result => {
              store[type] = result.data.results
              console.log(store[type]);
            })
            .catch( error =>{
              console.log(error);
            })
        },

        getApiTrend(link,type, arr){
          axios.get(link + type + '/' + 'day', {
            params : store.queryparamPopular
          })
            .then(result => {
              arr = result.data.results
              console.log(arr);
            })
            .catch( error =>{
              console.log(error);
            })
        },
        search(){
          this.getApi(store.apiUrl ,'movie'),
          this.getApi(store.apiUrl ,'tv')
        }
      },

      mounted(){
        this.search(),
        this.getApiTrend(store.apiTrendUrl ,'movie',store.moviePopular),
        this.getApiTrend(store.apiTrendUrl ,'tv', store.tvPopular)
      },

      computed(){
        
      }
  }
</script>


<template>
  <Header @toSearch="search" />
  <Swiper type="moviePopular"/>
  <Swiper type="tvPopular"/>
  <CardsContainer type="movie" v-if="store.movie.length > 0" />
  <CardsContainer type="tv" v-if="store.tv.length > 0" />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
  body{
  background-color: $bcg-color-cardcontainer;
  }

</style>