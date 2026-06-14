import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Book A", "Author A", 1999);
const book2 = new Book("Book B", "Author B", 1997);
const book3 = new Book("Book C", "Author C", 2000);

const ebook1 = new EBook("EBook D", "Author D", 2010, "pdf");

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

book1.title = "Updated Book A";

try {
    book1.title = "";
} catch (error) {
    console.log(`Setting empty string failed with error ${error}`);
}

try {
    book1.title = 123;
} catch (error) {
    console.log(`Setting number failed with error ${error}`);
}

try {
    book1.author = 123;
} catch (error) {
    console.log(`Setting number failed with error ${error}`);
}

const oldest = Book.findOldestBook([book1, book2, book3, ebook1]);
console.log("Oldest book:", oldest.title);

const ebook2 = EBook.fromBook(book1, "pdf");
ebook2.printInfo();