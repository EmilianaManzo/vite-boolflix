<script>
import { store } from '../../data/store';
  export default {
    props:{
      title: String,
      org_title: String,
      language: String,
      vote: Number,
      overview: String,
      img: String

    }
  }
</script>

<template>
    <div class="col py-2">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="" class="w-100" alt="Avatar" >
          </div>
          <div class="flip-card-back">
            <p><strong>Titolo</strong>: {{ title }} </p>
            <p><strong>Titolo originale</strong>: {{ org_title }} </p>
            <p><strong>Lingua</strong>: {{ language }} </p>
            <p><strong>Voto</strong>: {{ vote }} </p>
            <p><strong>Trama</strong>: {{ overview }} </p>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss';


</style>