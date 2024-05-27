class Message {
    getContent() {
        throw new Error('This method should be overridden!');
    }
}

class SimpleMessage extends Message {
    getContent() {
        return "This is a simple message.";
    }
}

class MessageDecorator extends Message {
    constructor(message) {
        super();
        this.message = message;
    }

    getContent() {
        return this.message.getContent();
    }
}

class EncryptedMessage extends MessageDecorator {
    getContent() {
        return `Encrypted(${super.getContent()})`;
    }
}

class CompressedMessage extends MessageDecorator {
    getContent() {
        return `Compressed(${super.getContent()})`;
    }
}

const simpleMessage = new SimpleMessage();
const encryptedMessage = new EncryptedMessage(simpleMessage);
const compressedMessage = new CompressedMessage(encryptedMessage);

console.log(simpleMessage.getContent()); // This is a simple message.
console.log(encryptedMessage.getContent()); // Encrypted(This is a simple message.)
console.log(compressedMessage.getContent()); // Compressed(Encrypted(This is a simple message.))