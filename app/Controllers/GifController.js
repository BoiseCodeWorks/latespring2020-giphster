import GifService from "../Services/GifService.js";
import store from "../store.js";

//Private
function _draw() {
  let gifs = store.State.gifs;
  console.log(gifs);
}

//Public
export default class GifController {
  constructor() {
    store.subscribe("gifs", _draw);
    console.log("controller works")
  }
}
