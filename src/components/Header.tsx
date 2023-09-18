import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { ZodDate, date } from 'zod';

const Header = () => {
    const { data:sessionData} = useSession();

  return (
    <div className='w-full h-max'>
        <div className='flex pt-3 pl-3 justify-between'>
            <div className='block flex-col'>
            <h1 className='font-black text-4xl sm:text-6xl sm:tracking-wide pb-2'>
                {sessionData?.user?.name ? `${sessionData.user.name} Times` : "" }
            </h1>
            <p className='text-xs font-semibold'>Established 2023</p>
            </div>
            
            <div className='py-1'>
                {sessionData?.user ? (
                    <div className='p-2 grayscale'>
                        <Image className='border-2 border-neutral-800 w-15 h-15' width={50} height={50} src={sessionData?.user?.image} alt={sessionData?.user?.name}></Image>
                        
                    </div>
                ):(
                    <button>Login</button>
                )}
            </div>
        </div>

    </div>
  )
}

export default Header