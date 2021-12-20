class Point {
    constructor() {
        this._z = 0;
        this.x = this.y = 0;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }
    addOffset(xOffset, yOffset) {
        this.x += xOffset;
        this.y += yOffset;
    }
}
const p1 = new Point();
console.log(p1.z); // invoking the get property of z
p1.z = 100; // invoking the set property of z