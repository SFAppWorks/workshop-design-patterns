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

const oldPrinter = new OldPrinter();
const newPrinter = new NewPrinter();

function printSomething(printer, text) {
    printer.print(text); // This will not work with NewPrinter
}

printSomething(oldPrinter, "Hello World!");
printSomething(newPrinter, "Hello World!"); // Error: newPrinter.print is not a function