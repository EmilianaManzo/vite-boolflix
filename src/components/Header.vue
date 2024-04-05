<script>
import {store} from '../data/store';
  export default {
    data(){
      return{
        store
      }
    }

  }  
</script>

<template>
  <header>
    <div class="container h-100 ">
      <div class="row d-flex h-100 ">
        <div class="col title d-flex align-items-center ">
          <h1 class="text-danger" @click="$emit('homepage')">BOOLFLIX</h1>
        </div>
        <div class="col d-flex align-items-center justify-content-end ">
          <input 
          v-model.trim="store.queryparam.query"
          @keyup.enter="$emit('toSearch')"
          type="text" class="form-control w-25 mx-2">
          <button 
          @click="$emit('toSearch')"
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
  .title{
    cursor: pointer;
  }
}
</style>