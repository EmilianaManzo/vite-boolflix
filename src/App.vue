<script>
  import axios from 'axios';
  import {store} from './data/store';
  import Header from './components/Header.vue';
  import CardsContainer from './components/CardsContainer.vue';

  export default {
      components:{
        Header,
        CardsContainer
      },
      data(){
        return{
          axios,
          store
        }
      },

      methods:{
        getApi(type){
          axios.get(store.apiUrl + type , {
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
        search(){
          this.getApi('movie'),
          this.getApi('tv')
        }
      },

      mounted(){
        this.search()
      }
  }
</script>


<template>
  <Header @toSearch="search" />
  <CardsContainer type="movie" v-if="store.movie.length > 0" />
  <CardsContainer type="tv" v-if="store.tv.length > 0" />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
  body{
  background-color: $bcg-color-cardcontainer;
  }

</style>