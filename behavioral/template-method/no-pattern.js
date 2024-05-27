class DataProcessor {
    processData(data) {
        const processedData = this.transformData(data);
        console.log(`Processed Data: ${processedData}`);
    }

    transformData(data) {
        throw new Error('transformData method should be overridden!');
    }
}

class CsvProcessor extends DataProcessor {
    transformData(data) {
        // Specific CSV transformation logic
        return data.split(',').map(item => item.trim());
    }
}

class JsonProcessor extends DataProcessor {
    transformData(data) {
        // Specific JSON transformation logic
        return JSON.parse(data);
    }
}

const csvProcessor = new CsvProcessor();
csvProcessor.processData('name, age, city'); // Processed Data: ["name", "age", "city"]

const jsonProcessor = new JsonProcessor();
jsonProcessor.processData('{"name": "John", "age": 30, "city": "New York"}'); // Processed Data: { name: 'John', age: 30, city: 'New York' }