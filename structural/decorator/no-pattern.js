class SimpleMessage {
    getContent() {
        return "This is a simple message.";
    }
}

class EncryptedMessage extends SimpleMessage {
    getContent() {
        return `Encrypted(${super.getContent()})`;
    }
}

class CompressedMessage extends SimpleMessage {
    getContent() {
        return `Compressed(${super.getContent()})`;
    }
}

const message = new EncryptedMessage();
console.log(message.getContent()); // Encrypted(This is a simple message.)