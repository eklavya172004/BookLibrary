import Image from 'next/image'
import React from 'react'
import BookCover from './BookCover'

const Bookoverview = ({title,author,genre,rating,total_copies,available_copies,description,cover,color}:Book) => {
  return <section className='book-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1>
                {title}
            </h1>

            <div className='book-info'>
                <p>
                    By <span className='font-semibold text-light-200'>{author}</span>
                </p>

                <p>
                    Category{" "} 
                    <span className='font-semibold text-light-200'>{genre}</span>
                </p>

                <div className='flex flex-row gp-1'>
                        <Image src="/icons/star.svg" alt='starts' width={22} height={22}/>
                        <p>{rating}</p>
                </div>


            </div>

                <div className='book-copies'>
                    <p> 
                        Total Books: <span>{total_copies}</span>
                    </p>

                    <p> 
                        Available Books: <span>{available_copies}</span>
                    </p>
                </div>

                <p className='book-description'>
                    {description}
                </p>

                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-700 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300">
  <Image width={30} height={30} alt="book" src="/icons/book.svg" />
  <p className="font-bebas-neue text-xl">Borrow Book</p>
</button>

        </div>

        <div className='relative flex flex-1 justify-center'>
                <div className='relative'>
                        <BookCover
                            varient="wide"
                            coverColor={color}
                            coverImage={cover}
                            className="z-10"
                        />

                        <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden'>
                            <BookCover
                                varient="wide"
                                coverColor={color}
                                coverImage={cover}
                                className="z-10"
                            />
                        </div>
                </div>
        </div>
  </section>
}

export default Bookoverview
