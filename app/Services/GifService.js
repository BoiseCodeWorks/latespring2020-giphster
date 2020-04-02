import store from "../store.js";
import Gif from "../Models/Gif.js";


let _gifApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/',
  timeout: 3000
})

class GifService {
  constructor() {
    console.log("service works")
    this.getTrendingGifs()
  }

  getTrendingGifs() {
    _gifApi.get('trending?api_key=grYySbfMe8NYXB4TuX6n3pPNbwok4ndS&rating=g')
      .then(res => {
        console.log(res.data.data)
        let gifs = res.data.data.map(gifRawData => new Gif(gifRawData))
        store.commit('gifs', gifs)
      })
      .catch(err => console.error(err))
  }
  getSearchGifs(query) {
    _gifApi.get('search?api_key=grYySbfMe8NYXB4TuX6n3pPNbwok4ndS&rating=g&q=' + query)
    let queryParams = {
      api_key: 'grYySbfMe8NYXB4TuX6n3pPNbwok4ndS',
      rating: 'g',
      q: "cheeseburgers and stuff"
    }
  }


}

const service = new GifService();
export default service;
