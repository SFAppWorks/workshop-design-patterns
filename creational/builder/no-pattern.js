class Car {
    constructor(engine, seats, color, gps) {
        this.engine = engine;
        this.seats = seats;
        this.color = color;
        this.gps = gps;
    }
}

const car = new Car('V8', 'leather', 'red', true);
console.log(car);