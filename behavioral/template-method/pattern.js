class DataProcessor {
    processData(data) {
        this.readData(data);
        this.transformData();
        this.saveData();
    }

    readData(data) {
        this.data = data;
        console.log('Reading data:', data);
    }

    transformData() {
        throw new Error('transformData method should be overridden!');
    }

    saveData() {
        console.log('Saving data:', this.data);
    }
}

class CsvProcessor extends DataProcessor {
    transformData() {
        this.data = this.data.split(',').map(item => item.trim());
        console.log('Transforming data as CSV:', this.data);
    }
}

class JsonProcessor extends DataProcessor {
    transformData() {
        this.data = JSON.parse(this.data);
        console.log('Transforming data as JSON:', this.data);
    }
}

const csvProcessor = new CsvProcessor();
csvProcessor.processData('name, age, city');
// Reading data: name, age, city
// Transforming data as CSV: ["name", "age", "city"]
// Saving data: ["name", "age", "city"]

const jsonProcessor = new JsonProcessor();
jsonProcessor.processData('{"name": "John", "age": 30, "city": "New York"}');
// Reading data: {"name": "John", "age": 30, "city": "New York"}
// Transforming data as JSON: { name: 'John', age: 30, city: 'New York' }
// Saving data: { name: 'John', age: 30, city: 'New York' }