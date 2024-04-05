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
              store.queryparam.query = ''
            })
            .catch( error =>{
              console.log(error);
            })
        },

        getApiTrend(type, arr){
          axios.get(store.apiTrendUrl + type + '/' + 'day', {
            params : store.queryparamPopular
          })
            .then(result => {
              store[arr] = result.data.results
              console.log(store[arr]);
            })
            .catch( error =>{
              console.log(error);
            })
        },
        search(){
          this.getApi(store.apiUrl ,'movie'),
          this.getApi(store.apiUrl ,'tv')
        },
        reset(){
          store.movie = [],
          store.tv = []
        }
      },

      mounted(){
        this.search(),
        this.getApiTrend('movie','moviePopular'),
        this.getApiTrend('tv', 'tvPopular')
      },

      computed(){
        
      }
  }
</script>


<template>
  <Header @toSearch="search" @homepage="reset" />
  <Swiper type="moviePopular" v-if="store.movie.length == 0 && store.tv.length == 0"/>
  <Swiper type="tvPopular" v-if="store.movie.length == 0 && store.tv.length == 0"/>
  <CardsContainer type="movie" v-if="store.movie.length > 0" />
  <CardsContainer type="tv" v-if="store.tv.length > 0" />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
  body{
  background-color: $bcg-color-cardcontainer;
  }

</style>