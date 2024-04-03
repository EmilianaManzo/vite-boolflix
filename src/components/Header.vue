<script>
import {store} from '../data/store';
  export default {
    data(){
      return{
          // store usato solo per capire se richiamava tosearch dallo store 
          tosearch: '', 
      }
    },

    methods:{
      toSearch(){
        store.queryparam = {
          // query : store.tosearch (non lo prende. chiedere a stefano)
          query : this.tosearch
        }
        this.tosearch = ''
        this.$emit('toSearch')
      },
    },
    mounted(){
      this.toSearch()
    }
  }  
</script>

<template>
  <header>
    <div class="container h-100 ">
      <div class="row d-flex h-100 ">
        <div class="col title  ">
          <h1>BOOLFLIX</h1>
        </div>
        <div class="col d-flex">
          <input v-model.trim="tosearch"
          @keyup.enter="toSearch"
          type="text" class="form-control w-25">
          <button 
          @click="toSearch"
          class="btn btn-danger">Search</button>
        </div>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss';

header{
  height: 100px;
  background-color: black;
  
}
</style>