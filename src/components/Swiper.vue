<script>
  import {store} from '../data/store';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  // import './style.css';
  // import required modules
  import { FreeMode, Pagination } from 'swiper/modules';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      type: String
    },
    data(){
      return {
        store,
        modules: [FreeMode, Pagination],
        isPosterload : true
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
  <section class=" pt-5 container">
    <h2 class="py-4 text-danger fw-bold "> Popular {{ title }}</h2>
    <swiper
      :slidesPerView="5"
      :spaceBetween="30"
      :freeMode="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
      v-for="item in store[type]"
      :key="item.id">
        <img v-if="isPosterload" @error="isPosterload = false" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" class="poster" :alt="item.title || item.name" >
        <div v-else class="title-front w-100 h-100 ">{{ item.title || item.name }}</div>
      </swiper-slide>

    </swiper>
  </section>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.swiper {
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>




