// Potential for Conflicts: Direct modifications can introduce conflicts and unexpected behaviors,
// especially when dealing with third-party libraries or complex systems.

class OldPrinter {
    print(text) {
        console.log(`Printing: ${text}`);
    }
}

class NewPrinter {
    printDocument(doc) {
        console.log(`Printing Document: ${doc}`);
    }

    // Anti-pattern: Direct modification to add compatibility
    print(text) {
        this.printDocument(text);
    }
}

const oldPrinter = new OldPrinter();
const newPrinter = new NewPrinter();

function printSomething(printer, text) {
    printer.print(text);
}

printSomething(oldPrinter, "Hello World!");
printSomething(newPrinter, "Hello World!"); // Works, but not ideal