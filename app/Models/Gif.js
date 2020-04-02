export default class Gif {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.embed_url = data.embed_url
        this.img = data.images.downsized_still.url
    }

    get Template() {
        return `<p>${this.title}</p>`
    }
}