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
    LibraryItem.prototype.displayDetails = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.yearPublished, ".");
    };
    return LibraryItem;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, yearPublished, genre) {
        var _this = _super.call(this, title, author, yearPublished) || this;
        _this.genre = genre;
        return _this;
    }
    Book.prototype.displayDetails = function () {
        return "".concat(_super.prototype.displayDetails.call(this), " Genre: ").concat(this.genre);
    };
    return Book;
}(LibraryItem));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(title, author, yearPublished, edition) {
        var _this = _super.call(this, title, author, yearPublished) || this;
        _this.edition = edition;
        return _this;
    }
    Magazine.prototype.displayDetails = function () {
        return "".concat(_super.prototype.displayDetails.call(this), " edition: ").concat(this.edition);
    };
    return Magazine;
}(LibraryItem));
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Library.prototype.displayAllItems = function () {
        this.items.forEach(function (item) {
            console.log(item.displayDetails());
        });
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("atomic habits", "james clear", 1995, "Fiction");
var magazine1 = new Magazine("labour india", "educatinal", 1990, 100);
var book2 = new Book("wings of fire", "apj", 1990, "Fiction");
library.addItem(book1);
library.addItem(magazine1);
library.displayAllItems();
library.addItem(book2);
library.displayAllItems();
