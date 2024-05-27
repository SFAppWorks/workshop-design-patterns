class OldPrinter {
    print(text) {
        console.log(`Printing: ${text}`);
    }
}

class NewPrinter {
    printDocument(doc) {
        console.log(`Printing Document: ${doc}`);
    }
}

class PrinterAdapter {
    constructor(newPrinter) {
        this.newPrinter = newPrinter;
    }

    print(text) {
        this.newPrinter.printDocument(text);
    }
}

const oldPrinter = new OldPrinter();

const newPrinter = new NewPrinter();
const adapter = new PrinterAdapter(newPrinter);

function printSomething(printer, text) {
    printer.print(text);
}

printSomething(oldPrinter, "Hello World!");
printSomething(adapter, "Hello World!"); // Works: Printing Document: Hello World!