class EmailNotification {
    send(message) {
        console.log(`Sending email with message: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`Sending SMS with message: ${message}`);
    }
}

const emailNotification = new EmailNotification();
const smsNotification = new SMSNotification();

emailNotification.send("Hello via Email!");
smsNotification.send("Hello via SMS!");