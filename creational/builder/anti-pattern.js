// 	Readability: The constructor with multiple optional parameters can be hard to read and understand.
// 	Maintainability: Adding new parameters requires modifying the constructor, making it less maintainable.
// 	Flexibility: It’s difficult to create instances with different combinations of parameters without resorting to setting many default values.

class Car {
    constructor(engine, seats, color, gps) {
        this.engine = engine || 'default';
        this.seats = seats || 'standard';
        this.color = color || 'white';
        this.gps = gps || false;
    }
}

// Usage
const car1 = new Car('V8');
const car2 = new Car('V8', 'leather');
const car3 = new Car('V8', 'leather', 'red');
const car4 = new Car('V8', 'leather', 'red', true);

console.log(car1); // Car { engine: 'V8', seats: 'standard', color: 'white', gps: false }
console.log(car2); // Car { engine: 'V8', seats: 'leather', color: 'white', gps: false }
console.log(car3); // Car { engine: 'V8', seats: 'leather', color: 'red', gps: false }
console.log(car4); // Car { engine: 'V8', seats: 'leather', color: 'red', gps: true }