function findAccountById(accounts, id) {
  return accounts.find((account => account.id === id))
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0
  for (let book of books) {
    for (let borrow of book.borrows) {
      if (borrow.id === account.id) {
        count++
      }
    }
  }
  return count
}


function getBooksPossessedByAccount(account, books, authors) {
  const checkedOut = books.filter((book) => {
    const [recentBorrow] = book.borrows
    return !recentBorrow.returned && recentBorrow.id === account.id
  })

  const result = checkedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return { ...book, author }
  })
   return result
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
