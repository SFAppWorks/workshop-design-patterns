function handleRequest(request) {
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

handleRequest({ type: 'auth' }); // Handling authentication
handleRequest({ type: 'data' }); // Handling data retrieval
handleRequest({ type: 'log' }); // Handling logging
handleRequest({ type: 'unknown' }); // Unknown request type