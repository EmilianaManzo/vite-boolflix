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
        getApi(link,type,param){
          axios.get(link + type , {
            params : param
          })
            .then(result => {
              store[type] = result.data.results
              console.log(store[type]);
            })
            .catch( error =>{
              console.log(error);
            })
          
        },
        search(){
          this.getApi(store.apiUrl ,'movie',store.queryparam),
          this.getApi(store.apiUrl ,'tv',store.queryparam)
        }
      },

      mounted(){
        this.search(),
        this.getApi(store.apiTrendUrl ,'movie',store.queryparamPopular),
        this.getApi(store.apiTrendUrl ,'tv',store.queryparamPopular)
      },

      computed(){
        
      }
  }
</script>


<template>
  <Header @toSearch="search" />
  <Swiper type="movie"/>
  <Swiper type="tv"/>
  <CardsContainer type="movie" v-if="store.movie.length > 0" />
  <CardsContainer type="tv" v-if="store.tv.length > 0" />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
  body{
  background-color: $bcg-color-cardcontainer;
  }

</style>