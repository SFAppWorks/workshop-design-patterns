// Implementor
class Sender {
    send(message) {
        throw new Error('This method should be overridden!');
    }
}

class EmailSender extends Sender {
    send(message) {
        console.log(`Sending email with message: ${message}`);
    }
}

class SMSSender extends Sender {
    send(message) {
        console.log(`Sending SMS with message: ${message}`);
    }
}

// Abstraction
class Notification {
    constructor(sender) {
        this.sender = sender;
    }

    notify(message) {
        throw new Error('This method should be overridden!');
    }
}

class UserNotification extends Notification {
    notify(message) {
        this.sender.send(message);
    }
}

const emailSender = new EmailSender();
const smsSender = new SMSSender();

const emailNotification = new UserNotification(emailSender);
const smsNotification = new UserNotification(smsSender);

emailNotification.notify("Hello via Email!"); // Sending email with message: Hello via Email!
smsNotification.notify("Hello via SMS!"); // Sending SMS with message: Hello via SMS!