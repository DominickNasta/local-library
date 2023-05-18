function getTotalBooksCount(books) {
  return books.length
 }
 
 function getTotalAccountsCount(accounts) {
   return accounts.length
 }
 
 function getBooksBorrowedCount(books) {
   return books.reduce((total, book) => { 
   const isBorrowed = !book.borrows[0].returned
   return total + (isBorrowed ? 1 : 0) 
   }, 0)
 }
 
 function getMostCommonGenres(books) {
   const genreCount = {}
   for (let book of books) {
     const genre = book.genre
     if (genreCount[genre]) {
       genreCount[genre] ++
     } else {
       genreCount[genre] = 1
     }
   }
    const genres = Object.keys(genreCount).map((genre) => 
   ({
     name: genre,
     count: genreCount[genre],
   }));
   genres.sort((a, b) => b.count - a.count)
   return genres.slice(0, 5)
 }
 
 function getMostPopularBooks(books) {
   const result = books.map((book) => ({name: book.title, count: book.borrows.length}))
   const sortedResults = result
   .sort((resultA, resultB) => (resultB.count - resultA.count))
   return sortedResults.slice(0, 5)
 }
 
 function getMostPopularAuthors(books, authors) {
   const authorbooks = authors.map((author) => {
     const borrows = countAuthorBookBorrows(books, author.id)
     return { name: `${author.name.first} ${author.name.last}`, count: borrows }
   })
   const authorSort = authorbooks.sort((authorA, authorB) => authorB.count - authorA.count)
   return authorSort.slice(0, 5)
 }
 
 //helper function for getMostPopularAuthors
 function countAuthorBookBorrows(books, authorId) {
   return books.reduce((total, book) => {
     if (book.authorId === authorId) {
       return total + book.borrows.length;
     }
     return total
   }, 0)
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
