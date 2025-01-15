class LibraryItem {
    constructor(
        public title: string,
        public author: string,
        public yearPublished: number
    ) {}

    displayDetails(): string {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}.`;
    }
}
class Book extends LibraryItem {
    constructor(
        title: string,
        author: string,
        yearPublished: number,
        public genre: string
    ) {
        super(title, author, yearPublished); 
    }

    // Override displayDetails (Polymorphism)
    displayDetails(): string {
        return `${super.displayDetails()} Genre: ${this.genre}`;
    }
}
class Magazine extends LibraryItem {
    constructor(
        title: string,
        author: string,
        yearPublished: number,
        public edition: number
    ) {
        super(title, author, yearPublished);
    }

    displayDetails(): string {
        return `${super.displayDetails()} Issue Number: ${this.edition}`;
    }
}
class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }
    displayAllItems(): void {
        this.items.forEach(item => {
            console.log(item.displayDetails());
        });
    }
}
const library = new Library();


const book1 = new Book("atomic habits", "james clear", 1995, "Fiction");
const magazine1 = new Magazine("labour india", "educatinal", 1990, 100);



library.addItem(book1);
library.addItem(magazine1);

library.displayAllItems();
