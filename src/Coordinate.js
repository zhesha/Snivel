export default class Coordinate {
    constructor  (x, y) {
        this.x = x;
        this.y = y;
    }

    add (v) {
        this.x += v.x;
        this.y += v.y;
    }
}
