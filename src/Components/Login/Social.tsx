import Image from 'next/image';
import React from 'react'

export default function Social(props: { text: string }) {
  return (
    <section
    className='w-[375px] md:w-[490px] h-[80px] gap-6 box-border border-t-[1px] border-solid border-aliceblue'
      >
        <div
          className='flex justify-center gap-4 w-full h-48px items-center'
        >
          <hr
            className='border-1 border-solid border-gray-300'
          />
          <h2
            className='text-gray-500 md:text-lg'
          >{props.text} com Social</h2>
          <hr
            className='border-1 border-solid border-gray-300'
          />
        </div>
        <div
          className='flex justify-center gap-4 w-full h-48px items-center mt-4'
        >
          <button>
            <Image src='/google.svg' alt='Google' width={40} height={40} />
          </button>
          <button>
            <Image src='/apple.svg' alt='Github' width={40} height={40} />
          </button>
          <button>
            <Image src='/facebook.svg' alt='Facebook' width={40} height={40} />
          </button>
        </div>
      </section>
  )
}
