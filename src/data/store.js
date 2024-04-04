	
import { reactive } from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',

  queryparam:{
    api_key : '3695807eb24e5d5c2383d4d791569ff2',
    language: 'it-IT',
    query : ''
  },

  movie:[],
  tv:[],
})