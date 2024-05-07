import Image from 'next/image'


import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col rounde items-center justify-between p-10">
      <div className='grid grid-col-2 gap-6 justify-center items-center'>
        <div className='mb-10 col-span-2 flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-4xl text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839] mb-8'>divisions</h1>
          <div className='flex justify-around w-full font-sans uppercase'>
            <Link href={"/divisions"} className="flex flex-col justify-center items-center p-6 hover:text-white hover:text-xs hover:grayscale-[1]">
              <p>Monday 8PM EST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col justify-center items-center p-6 hover:text-white hover:text-xs hover:grayscale-[1]'>
              <p>Tuesday 9PM EST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col justify-center items-center p-6 hover:text-white hover:text-xs hover:grayscale-[1]'>
              <p>Wednesday 6PM PST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={230}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col justify-center items-center p-6 hover:text-white hover:text-xs hover:grayscale-[1]'>
              <p>Sunday 8PM EST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col justify-center items-center p-6 hover:text-white hover:text-sm hover:grayscale-[1]'>
                <p>Sunday 7PM PST</p>
                <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
          </div>
        </div>
        <div className='col-start-2 row-span-3'>
          <Image
          className='relative drop-shadow-[0_0_6rem_#141414]'
          src="/assets/images/rd2l-lame.png"
          alt='My Image'
          width={750}
          height={750}
          priority
          />
        </div>
        <div className='row-start-2 flex flex-col justify-center items-center rounded-[4px] p-6 bg-[#141414] text-white border-4 border-[#9b3839]'>
          <h1 className='uppercase font-mono text-2xl mb-2 text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839]'>General Info</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Individual signups</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Teams built via draft</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>8 week BO2 regular season</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Top teams make playoffs</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center rounded-[4px] p-6 bg-[#141414] text-white border-4 border-[#9b3839]'>
          <h1 className='uppercase font-mono text-2xl mb-2 text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839]'>Player Culture</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Make new friends</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Grow with your teammates</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Enjoy community content</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Play with all skill levels</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center rounded-[4px] p-6 bg-[#141414] text-white border-4 border-[#9b3839]'>
          <h1 className='uppercase font-mono text-2xl mb-2 text-shadow-[_6px_8px_3px_var(--ts-shadow-color)] shadow-[#9b3839]'>RD2L Features</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Inhouse partipition</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Play in weekend tourneys</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Mini leagues between seasons</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Find Battlecup stacks</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
