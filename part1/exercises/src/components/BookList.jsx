function BookList() {
   let pageTitle = 'My Favorite Books'
   let book1 = 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1156897088i/350.jpg'
   let book2 = 'https://m.media-amazon.com/images/I/51TooQyfKeL.jpg'
   let book3 = 'https://m.media-amazon.com/images/I/61MjUhKRhgL._AC_UF1000,1000_QL80_.jpg'

   return (
      <div>
         <h3>{pageTitle}</h3>
         <div>
            <img style={{height: '70vh'}} src={book2} alt="Nothing here!" />
            <img style={{height: '70vh'}} src={book1} alt="Nothing here!" />
            <img style={{height: '70vh'}} src={book3} alt="Nothing here!" />
         </div>
      </div>
   );
}

export default BookList