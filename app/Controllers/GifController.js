import GifService from "../Services/GifService.js";
import store from "../store.js";

//Private
function _draw() {
  let gifs = store.State.gifs;
  let template = ''
  gifs.forEach(gif => template += gif.Template)
  document.getElementById("gifs").innerHTML = template
  console.log(gifs);
}

function _drawActiveGif() {
  let gif = store.State.activeGif
  document.getElementById('gif-details').innerHTML = gif.animatedTemplate
}

//Public
export default class GifController {
  constructor() {
    store.subscribe("gifs", _draw);
    store.subscribe('activeGif', _drawActiveGif)
    console.log("controller works")
  }

  viewGifDetails(gifId) {
    GifService.viewGifDetails(gifId)
  }

}
