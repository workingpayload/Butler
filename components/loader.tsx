import React from 'react'
import Image from 'next/image'

const loader = () => {
  return (
    <div className='justify-center items-center h-full flex flex-col gap-y-4'>
       <div className='w-10 h-10 relative animate-spin'>
            <Image
                alt="logo"
                fill
                src="/logo.png"/>
       </div>
       <p className='text-sm text-muted-foreground'>
         Butler is Working...
       </p>
    </div>
  );
};

export default loader