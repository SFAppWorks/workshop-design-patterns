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

const authService = new AuthenticationService();
const userService = new UserService();
const paymentService = new PaymentService();

authService.login('user', 'password');
userService.getUserInfo(1);
paymentService.processPayment(1, 100);