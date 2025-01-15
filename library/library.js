var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibraryItem = /** @class */ (function () {
    function LibraryItem(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
    // A method to display the details of the item
    LibraryItem.prototype.displayDetails = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.yearPublished, ".");
    };
    return LibraryItem;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, yearPublished, genre) {
        var _this = _super.call(this, title, author, yearPublished) || this; // Call the base class constructor
        _this.genre = genre;
        return _this;
    }
    // Override displayDetails (Polymorphism)
    Book.prototype.displayDetails = function () {
        return "".concat(_super.prototype.displayDetails.call(this), " Genre: ").concat(this.genre);
    };
    return Book;
}(LibraryItem));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(title, author, yearPublished, issueNumber) {
        var _this = _super.call(this, title, author, yearPublished) || this;
        _this.issueNumber = issueNumber;
        return _this;
    }
    Magazine.prototype.displayDetails = function () {
        return "".concat(_super.prototype.displayDetails.call(this), " Issue Number: ").concat(this.issueNumber);
    };
    return Magazine;
}(LibraryItem));
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    // Add a new item to the library
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    // Display details of all items
    Library.prototype.displayAllItems = function () {
        this.items.forEach(function (item) {
            console.log(item.displayDetails());
        });
    };
    return Library;
}());
var library = new Library();
// Create library items
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
var magazine1 = new Magazine("National Geographic", "Various", 2023, 502);
// Add items to the library
library.addItem(book1);
library.addItem(magazine1);
// Display all library items
library.displayAllItems();
