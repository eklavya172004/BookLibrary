// import { Link } from 'lucide-react'
import React from 'react'
import BookCover from './BookCover'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

const BookCard = ({id,title,genre,color,isLoanBooked = false,cover} : Book) => ( 
     <li className={cn(isLoanBooked && "xs:w-52 w-full")}>
        <Link href={`/books/${id}`}
            className={cn(isLoanBooked && "flex flex-col items-center w-full")}>
        
            <BookCover coverColor={color} coverImage={cover}/>

                <div className={cn("mt-4",!isLoanBooked && "xs:max-w-40 max-w-28")}>
                    <p className='book-title'>{title}</p>
                    <p className='book-genre'>{genre}</p>
                </div>

                {isLoanBooked && (
                    <div className='mt-3 w-full'>
                        <div className='book-loaned'>
                            <Image src='/icons/calendar.svg'
                                alt='Calender icon'
                                width={18}
                                height={18}
                                className='objeyct-contain'
                            />
                        
                        <p className='text-light-100 text-xs'>11 days left to return</p>
                        </div>

                        <Button className='w-full mt-2 bg-yellow-700 hover:bg-yellow-800 text-white font-medium py-2 px-4 rounded transition-colors'>Download receipt</Button>

                    </div>
                )}

        </Link>
  </li>)


export default BookCard
