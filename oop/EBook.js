import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("File format must be a valid string");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `${this.title} by ${this.author}, ${this.year}, format: ${this.fileFormat}`
        );
    }

    static fromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}