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

class NewPrinterAdapter {
    constructor(newPrinter) {
        this.newPrinter = newPrinter;
    }

    print(text) {
        this.newPrinter.printDocument(text);
    }
}

const oldPrinter = new OldPrinter();

const newPrinter = new NewPrinter();
const newPrinterAdapter = new NewPrinterAdapter(newPrinter);

function printSomething(printer, text) {
    printer.print(text);
}

printSomething(oldPrinter, "Hello World!");
printSomething(newPrinterAdapter, "Hello World!"); // Works: Printing Document: Hello World!