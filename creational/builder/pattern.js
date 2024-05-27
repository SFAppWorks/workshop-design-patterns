class Car {
    constructor(engine, seats, color, gps) {
        this.engine = engine;
        this.seats = seats;
        this.color = color;
        this.gps = gps;
    }
}

class CarBuilder {
    constructor() {
        this.engine = 'default';
        this.seats = 'standard';
        this.color = 'white';
        this.gps = false;
    }

    setEngine(engine) {
        this.engine = engine;
        return this;
    }

    setSeats(seats) {
        this.seats = seats;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setGPS(gps) {
        this.gps = gps;
        return this;
    }

    build() {
        return new Car(this.engine, this.seats, this.color, this.gps);
    }
}

const carBuilder = new CarBuilder();
const car = carBuilder.setEngine('V8').setSeats('leather').setColor('red').setGPS(true).build();
console.log(car);