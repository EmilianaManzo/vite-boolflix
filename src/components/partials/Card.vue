<script>
import { store } from '../../data/store';
  export default {
    props:{
      cardObj: Object
    },

    data(){
      return{
        isFlagload : true
      }
    },

    methods:{
      getImage(image){
        return new URL (`../../assets/img/${image}.png` , import.meta.url).href
      }
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

            <p
              v-if="isFlagload"
              ><strong>Lingua:</strong> <img :src="getImage(cardObj.original_language )" @error="isFlagload = false"  alt=""> </p>
            <p v-else><strong>Lingua:</strong> {{ cardObj.original_language  }}</p>

            <p><strong>Voto:</strong> {{ cardObj.vote_average }} </p>
            <p><strong>Trama:</strong> {{ cardObj.overview }} </p>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss';

img{
  width: 30px;
}

</style>