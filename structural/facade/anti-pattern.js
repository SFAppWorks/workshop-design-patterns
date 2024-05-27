//	Complexity: Clients need to know about and interact with multiple classes, leading to complex and hard-to-maintain code.
// 	Lack of Encapsulation: The complexity of the subsystem is exposed to the client, making it harder to use and understand.
// 	Tight Coupling: Clients are tightly coupled to the subsystem’s classes, making changes to the subsystem more difficult.

class AuthenticationService {
    login(username, password) {
        console.log(`Authenticating user ${username}`);
    }
}

class UserService {
    getUserInfo(userId) {
        console.log(`Getting info for user ${userId}`);
    }
}

class PaymentService {
    processPayment(userId, amount) {
        console.log(`Processing payment of ${amount} for user ${userId}`);
    }
}

function loginAndProcessPayment(username, password, userId, amount) {
    const authService = new AuthenticationService();
    const userService = new UserService();
    const paymentService = new PaymentService();

    authService.login(username, password);
    userService.getUserInfo(userId);
    paymentService.processPayment(userId, amount);
}

loginAndProcessPayment('user', 'password', 1, 100);