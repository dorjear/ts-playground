interface Book {
    id: number;
    title: string;
    author: string;
}

interface SimplifiedBook {
    bookTitle: string;
    bookAuthor: string;
}

const books: Book[] = [
    {id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger"},
    {id: 2, title: "1984", author: "George Orwell"},
    {id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
];

const simplifiedBooks: SimplifiedBook[] = books.map((book) => ({
    bookTitle: book.title,
    bookAuthor: book.author,
}));

console.log(JSON.stringify(simplifiedBooks))

// console.log(simplifiedBooks)


const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

console.log(Math.round(v))


const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
