<script>
import { store } from '../../data/store';
  export default {
    props:{
      cardObj: Object
    }
  }
</script>

<template>
    <div class="col py-2">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="" class="w-100" :alt="cardObj.title || cardObj.name" >
          </div>
          <div class="flip-card-back px-2 py-3">
            <p><strong>Titolo:</strong> {{ cardObj.title || cardObj.name }} </p>
            <p><strong>Titolo originale:</strong> {{ cardObj.original_title || cardObj.original_name }} </p>
            <p><strong>Lingua:</strong> {{ cardObj.original_language }} </p>
            <p><strong>Voto:</strong> {{ cardObj.vote_average }} </p>
            <p><strong>Trama:</strong> {{ cardObj.overview }} </p>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss';


</style>