<script>
  import axios from 'axios';
  import {store} from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';

  export default {
      components:{
        Header,
        Main
      },
      data(){
        return{
          axios
        }
      },

      methods:{
        getApi(){
          axios.get(store.apiUrl, {
            params : store.queryparam
          })
            .then(result => {
              console.log(result.data.results);
            })
            .catch( error =>{
              console.log(error);
            })
          
        }
      },

      mounted(){
        this.getApi()
      }
  }
</script>


<template>
  <Header />
  <Main />
</template>


<style lang="scss">
@use './assets/scss/main.scss'

</style>