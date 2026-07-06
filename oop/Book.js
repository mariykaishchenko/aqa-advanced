export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Title must be a valid string");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Author must be a valid string");
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Year must be a valid number");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`${this.title} by ${this.author}, ${this.year}`);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest,
    );
  }
}
