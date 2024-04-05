<script>
import { store } from '../../data/store';
  export default {
    props:{
      cardObj: Object
    },

    data(){
      return{
        isFlagload : true,
        isPosterload : true
      }
    },

    methods:{
      getImage(image){
        return new URL (`../../assets/img/${image}.png` , import.meta.url).href
      },

      ratingStars(){
        return Math.round(this.cardObj.vote_average / 2)
      }
    }
  }
</script>

<template>
    <div class="col py-2">
      <div class="flip-card">

        <div class="flip-card-inner">

          <div class="flip-card-front">
            <img v-if="isPosterload" @error="isPosterload = false" :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" class="poster" :alt="cardObj.title || cardObj.name" >
            <div v-else class="title-front w-100 h-100 ">{{ cardObj.title || cardObj.name }}</div>
          </div>

          <div class="flip-card-back">
            <div class="borders h-100 p-3 ">
              <p><strong>Titolo:</strong> {{ cardObj.title || cardObj.name }} </p>

              <p><strong>Titolo originale:</strong> {{ cardObj.original_title || cardObj.original_name }} </p>

              <p
                v-if="isFlagload"
                ><strong>Lingua:</strong> <img class="flag" :src="getImage(cardObj.original_language)" @error="isFlagload = false"  :alt="cardObj.original_language"> </p>
              <p v-else><strong>Lingua:</strong> {{ cardObj.original_language  }}</p>

              <p>
                <strong>Voto:</strong> 
                <i v-for="star in ratingStars() " :key="star" class="fa-solid fa-star full"></i>
                <i v-for="star in (5 - ratingStars()) " :key="star" class="fa-solid fa-star"></i>
              </p>
              <p class="plot"><strong>Trama:</strong>{{ cardObj.overview }}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss';

</style>