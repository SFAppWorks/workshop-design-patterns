class Logger {
    constructor() {
        this.logs = [];
    }

    addLog(message) {
        this.logs.push(message);
    }

    printLogs() {
        console.log(this.logs.join('\n'));
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.addLog('Log 1');
logger2.addLog('Log 2');

logger1.printLogs(); // Prints: Log 1
logger2.printLogs(); // Prints: Log 2