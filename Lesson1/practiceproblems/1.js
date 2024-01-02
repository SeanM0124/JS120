function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getdescription: function() {
      return `${this.title} was written by ${this.author}. ` +
        `I ${this.read ? 'have' : 'haven\'t'} read it.`;
    },

    readBook() {
      this.read = true;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry', false);
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse', false);

console.log(book1, book2, book3);
book1.readBook();
console.log(book1.getdescription());
