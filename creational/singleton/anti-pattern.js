// 	This approach pollutes the global namespace.
// 	It can be easily modified or overridden, breaking the singleton guarantee.
// 	Difficult to manage in larger codebases with multiple modules.

const logger = {
    logs: [],
    addLog(message) {
        this.logs.push(message);
    },
    printLogs() {
        console.log(this.logs.join('\n'));
    }
};

logger.addLog('Log 1');
logger.addLog('Log 2');

logger.printLogs(); // Prints: Log 1\nLog 2