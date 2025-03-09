import React from 'react'
import BookCard from './BookCard';

interface Props {
  title:String;
  books:Book[];
  containerClassName?:string;
}

const Booklist = ({title,books,containerClassName} : Props) => {
  return <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-light-100'>
             <ul className='book-list'>
                {
                  books.map((book) => (
                      <BookCard key={book.title} {...book} />
                  ))
                }
              </ul>            
        </h2>
  </section>
  
}

export default Booklist
