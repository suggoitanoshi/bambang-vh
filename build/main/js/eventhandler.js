class EventListener {
    constructor(main) {
        this.start = (e) => {
            if (e.target == this.main.getCanvas()) {
                this.listeners.forEach((l) => {
                    l.startClick();
                });
            }
        };
        this.end = (e) => {
            if (e.target == this.main.getCanvas()) {
                this.listeners.forEach((l) => {
                    l.endClick();
                });
            }
        };
        this.main = main;
        this.listeners = [];
        window.addEventListener('mousedown', this.start, false);
        window.addEventListener('mouseup', this.end, false);
        window.addEventListener('touchstart', this.start, false);
        window.addEventListener('touchend', this.end, false);
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
}
