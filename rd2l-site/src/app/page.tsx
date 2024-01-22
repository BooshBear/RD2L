import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='grid grid-col-2 gap-6 justify-center items-center'>
        <div className='mb-10 col-span-2 flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-4xl text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839] mb-8'>divisions</h1>
          <div className='flex justify-around w-full font-sans'>
            <div className='flex flex-col justify-center items-center'>
              <Link href={"/divisions"} className=''>Monday 8PM EST</Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Link href={"/divisions"} className=''>Tuesday 9PM EST</Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Link href={"/divisions"} className=''>Wednesday 6PM PST</Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Link href={"/divisions"} className=''>Sunday 8PM EST</Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <Link href={"/divisions"} className=''>Sunday 7PM PST</Link>
            </div>
          </div>
        </div>
        <div className='col-start-2 row-span-3'>
          <Image
          className='relative drop-shadow-[0_0_6rem_#ffffff70] opacity-60'
          src="/assets/images/rd2l-lame.png"
          alt='My Image'
          width={750}
          height={750}
          priority
          />
        </div>
        <div className='row-start-2 flex flex-col justify-center items-center border-[#9b3839] border-2 rounded-sm p-4 bg-[#0c0c0c]'>
          <h1 className='uppercase font-mono text-2xl mb-2 text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839]'>General Info</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Individual signups</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Teams built via draft</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>8 week BO2 regular season</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Top teams make playoffs</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center border-[#9b3839] border-2 rounded-sm p-4 bg-[#0c0c0c]'>
          <h1 className='uppercase font-mono text-2xl mb-2 text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839]'>Player Culture</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Make new friends</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Grow with your teammates</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Enjoy community content</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>-&gt;</span>Play with all skill levels</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center border-[#9b3839] border-2 rounded-sm p-4 bg-[#0c0c0c]'>
          <h1 className='uppercase font-mono text-2xl mb-2 text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839]'>RD2L Features</h1>
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
