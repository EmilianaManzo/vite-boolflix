<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';

  export default {
    components:{
      Card,
    },
    props:{
      type: String
    },
    data(){
      return{
        store
      }
    },
    computed:{
      title(){
        return this.type === 'movie' ? 'Film' : 'Serie TV'
      }
    }
  }
</script>

<template>
  <main>
    <div class="container">
      <h2 class="py-4 text-danger fw-bold ">{{ title }}</h2>
      <div class="row row-col-4 py-3">
        <Card
        v-for="item in store[type] "
        :key="item.id"
        :cardObj="item"
        />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss';
main{
  background-color: rgba(169,169,169, 0.5);
}
</style>