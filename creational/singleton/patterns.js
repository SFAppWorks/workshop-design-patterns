class SingletonLogger {
    constructor() {
        if (!SingletonLogger.instance) {
            this.logs = [];
            SingletonLogger.instance = this;
        }
        return SingletonLogger.instance;
    }

    addLog(message) {
        this.logs.push(message);
    }

    printLogs() {
        console.log(this.logs.join('\n'));
    }
}

const logger1 = new SingletonLogger();
const logger2 = new SingletonLogger();

logger1.addLog('Log 1');
logger2.addLog('Log 2');

logger1.printLogs(); // Prints: Log 1\nLog 2
logger2.printLogs(); // Prints: Log 1\nLog 2