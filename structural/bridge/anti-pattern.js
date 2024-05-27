// 	Maintainability: Every time a new notification method is added, the UserNotification class must be modified.
// 	Scalability: As the number of notification methods grows, the class becomes bloated with conditional logic.
// 	Flexibility: The approach makes it difficult to modify or extend notification behaviors without modifying the core logic of UserNotification.

class UserNotification {
    constructor(type) {
        this.type = type;
    }

    notify(message) {
        if (this.type === 'email') {
            console.log(`Sending email with message: ${message}`);
        } else if (this.type === 'sms') {
            console.log(`Sending SMS with message: ${message}`);
        } else if (this.type === 'push') {
            console.log(`Sending push notification with message: ${message}`);
        } else {
            throw new Error('Unknown notification type');
        }
    }
}

const emailNotification = new UserNotification('email');
const smsNotification = new UserNotification('sms');
const pushNotification = new UserNotification('push');

emailNotification.notify("Hello via Email!"); // Sending email with message: Hello via Email!
smsNotification.notify("Hello via SMS!"); // Sending SMS with message: Hello via SMS!
pushNotification.notify("Hello via Push!"); // Sending push notification with message: Hello via Push!