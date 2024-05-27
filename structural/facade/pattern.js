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

class UserFacade {
    constructor() {
        this.authService = new AuthenticationService();
        this.userService = new UserService();
        this.paymentService = new PaymentService();
    }

    loginAndProcessPayment(username, password, userId, amount) {
        this.authService.login(username, password);
        this.userService.getUserInfo(userId);
        this.paymentService.processPayment(userId, amount);
    }
}

const userFacade = new UserFacade();
userFacade.loginAndProcessPayment('user', 'password', 1, 100);