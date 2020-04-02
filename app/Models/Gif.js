export default class Gif {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.embed_url = data.embed_url
        this.img = data.images.downsized_still.url
    }

    get Template() {
        return `<img src="${this.img}" onclick="app.gifController.viewGifDetails('${this.id}')"/>`
    }

    get animatedTemplate() {
        return `
        <iframe class="h-100 w-100" src="${this.embed_url}"></iframe>
        `
    }

}