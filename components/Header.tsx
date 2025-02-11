// import { Link } from 'lucide-react'
"use client"; // ✅ Mark this as a Client Component

import { cn } from '@/lib/utils'
import Image from 'next/image';
import  Link  from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname();

  return (
    <header className='my-10 flex justify-between gap-5'>
        <Link href='/' className='text-2xl font-bold '>
            <Image src="icons/logo.svg" alt="logo" width={40} height={40} />
        </Link>

        <ul className='flex flex-row items-center gap-8'>
            <li>
                {/* its an shadcn component */}
                <Link className={cn('text-base cursor-pointer capitalize',pathname==='/library'?'text-light-200':'text-light-100')} href='/library'>Librarary</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
