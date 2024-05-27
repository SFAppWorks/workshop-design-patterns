//	Complexity: Handling all request types in a single method makes the code complex and hard to maintain.
// 	Lack of Flexibility: Adding new request types requires modifying the existing handler, violating the Open/Closed Principle.
// 	Single Responsibility Principle Violation: The handler class is responsible for handling all types of requests, making it less modular and harder to test.

class RequestHandler {
    handle(request) {
        if (request.type === 'auth') {
            console.log('Handling authentication');
        } else if (request.type === 'data') {
            console.log('Handling data retrieval');
        } else if (request.type === 'log') {
            console.log('Handling logging');
        } else {
            console.log('Unknown request type');
        }
    }
}

const handler = new RequestHandler();
handler.handle({ type: 'auth' }); // Handling authentication
handler.handle({ type: 'data' }); // Handling data retrieval
handler.handle({ type: 'log' }); // Handling logging
handler.handle({ type: 'unknown' }); // Unknown request type