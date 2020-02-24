class Pipe {
    constructor(main, lane) {
        this.laneColor = ['blue', 'orange', 'green'];
        this.main = main;
        this.s = main.getSize();
        this.ph = 35;
        this.pipeLane = lane;
    }
    render(delta, ctx) {
        ctx.fillStyle = this.laneColor[this.pipeLane];
        ctx.fillRect(0, (this.s[1] * 2 / 3) + (this.ph * this.pipeLane), this.s[0], this.ph);
    }
    load(callback) {
        return callback();
    }
}
class PipeContainer {
    constructor(main, n) {
        this.main = main;
        this.lanes = n;
        this.pipes = new Array();
        for (let i = 0; i < n; i++) {
            this.pipes.push(new Pipe(main, i));
        }
    }
    render(delta, ctx) {
        this.pipes.forEach((p) => {
            p.render(delta, ctx);
        });
    }
    load(callback) {
        return callback();
        this.pipes.forEach((p) => {
            p.load(() => this.loadAll(callback));
        });
    }
    loadAll(callback) {
        this.pipesLoaded++;
        if (this.pipesLoaded >= this.lanes) {
            callback();
        }
    }
}
