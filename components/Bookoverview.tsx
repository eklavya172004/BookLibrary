import Image from 'next/image'
import React from 'react'

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

                
        </div>
  </section>
}

export default Bookoverview
