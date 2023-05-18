function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => !book.borrows[0].returned)
  const returned = books.filter((book) => book.borrows[0].returned)
  return [checkedOut, returned]
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map((borrow) => {
  const account = accounts.find((acc) => acc.id === borrow.id)
  return { ...account, returned: borrow.returned }
  }).slice(0, 10)
  return borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
