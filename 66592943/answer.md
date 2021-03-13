Using `Promise.all` to get `title` of all books:

```ts
let authors = { authors: [], titles: [] }
getBooks()
  .then(books => {
    const promises = books.map(book => {
      authors.authors.push(book.author)
      getTitle(book.bookId)
        .then(({ title }) => {
          authors.titles.push(title)
        });
    });
    return Promise.all(promises);
  }).then(_ => console.log(authors))
```

My recommendation is to use `async/await` for some task like that. Your code will become like this:

```ts
const authors = { authors: [], titles: [] }
const books = await getBooks()
for (const book of books) {
  const { title } = await getTitle(book.bookId)
  authors.authors.push(book.author)
  authors.titles.push(title)
}
console.log(authors);
```
