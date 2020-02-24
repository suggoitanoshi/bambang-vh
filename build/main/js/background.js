class ParallaxBackground {
    constructor(main) {
        this.loaded = false;
        this.posX = 0;
        this.main = main;
        this.size = main.getSize();
    }
    render(delta, ctx) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, this.size[0], this.size[1]);
    }
    load(callback) {
        return callback();
        // let i = new Image();
        // i.src = '/assets/assets.flying.rocket.png';
        // i.onload = () => {
        //     createImageBitmap(i).then((s) => {
        //         callback();
        //     });
        // };
    }
}
