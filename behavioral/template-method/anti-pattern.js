//  Code Duplication: Each subclass duplicates the common steps of the algorithm, leading to redundancy.
// 	Maintainability: Changes to the algorithm’s structure require modifications in multiple places.
// 	Lack of Reusability: Common steps of the algorithm are not reused, making the code less modular and harder to maintain.

class CsvProcessor {
    processData(data) {
        const processedData = data.split(',').map(item => item.trim());
        console.log('Processed Data as CSV:', processedData);
    }
}

class JsonProcessor {
    processData(data) {
        const processedData = JSON.parse(data);
        console.log('Processed Data as JSON:', processedData);
    }
}

const csvProcessor = new CsvProcessor();
csvProcessor.processData('name, age, city');
// Processed Data as CSV: ["name", "age", "city"]

const jsonProcessor = new JsonProcessor();
jsonProcessor.processData('{"name": "John", "age": 30, "city": "New York"}');
// Processed Data as JSON: { name: 'John', age: 30, city: 'New York' }