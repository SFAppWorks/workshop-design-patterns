//  Class Explosion: Creating a new class for every combination of behaviors leads to an explosion of classes.
// 	Maintenance: Adding new behaviors requires creating multiple new subclasses, making the codebase harder to maintain.
// 	Inflexibility: Inflexible when combining behaviors dynamically at runtime.

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

class EncryptedCompressedMessage extends SimpleMessage {
    getContent() {
        return `Compressed(Encrypted(${super.getContent()}))`;
    }
}

const message1 = new EncryptedMessage();
const message2 = new CompressedMessage();
const message3 = new EncryptedCompressedMessage();

console.log(message1.getContent()); // Encrypted(This is a simple message.)
console.log(message2.getContent()); // Compressed(This is a simple message.)
console.log(message3.getContent()); // Compressed(Encrypted(This is a simple message.))