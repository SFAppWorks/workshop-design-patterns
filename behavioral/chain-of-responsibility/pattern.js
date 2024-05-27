class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        console.log('No handler found for', request.type);
    }
}

class AuthHandler extends Handler {
    handle(request) {
        if (request.type === 'auth') {
            console.log('Handling authentication');
        } else {
            super.handle(request);
        }
    }
}

class DataHandler extends Handler {
    handle(request) {
        if (request.type === 'data') {
            console.log('Handling data retrieval');
        } else {
            super.handle(request);
        }
    }
}

class LogHandler extends Handler {
    handle(request) {
        if (request.type === 'log') {
            console.log('Handling logging');
        } else {
            super.handle(request);
        }
    }
}

// Setting up the chain
const authHandler = new AuthHandler();
const dataHandler = new DataHandler();
const logHandler = new LogHandler();

authHandler.setNext(dataHandler).setNext(logHandler);

// Handling requests
authHandler.handle({ type: 'auth' }); // Handling authentication
authHandler.handle({ type: 'data' }); // Handling data retrieval
authHandler.handle({ type: 'log' }); // Handling logging
authHandler.handle({ type: 'unknown' }); // No handler found for unknown