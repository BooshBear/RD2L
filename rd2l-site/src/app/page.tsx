import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='grid grid-colg-[25% 50% 25%] grid-rows-2 justify-center items-center'>
        <div className='col-start-2 row-span-2'>
          <Image
          className='relative drop-shadow-[0_0_6rem_#ffffff70] opacity-50'
          src="/assets/images/rd2l-lame.png"
          alt='My Image'
          width={1000}
          height={1000}
          priority
          />
        </div>
        <div className='row-start-1 flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-xl mb-2'>General Info</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Individual signups</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Teams built via draft</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>8 week BO2 regular season</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Top teams make playoffs</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-xl mb-2'>Player Culture</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Make new friends</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Grow with your teammates</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Enjoy community content</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Play with all skill levelg</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-xl mb-2'>RD2L Features</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Participate in inhouses</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Play in weekend tourneys</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Mini leagues between seasons</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Find Battlecup stacks</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-xl mb-2'>RD2L Teams</h1>
          <ul className='font-sans text-lg'>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Participate in inhouses</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Play in weekend tourneys</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Mini leagues between seasons</li>
            <li><span className='text-[#9b3839] font-bold text-xl mr-4'>&gt;</span>Find Battlecup stacks</li>
          </ul>
        </div>
        <div className='col-span-3 flex flex-col justify-center items-center'>
          <h1 className='mt-20 uppercase font-mono text-xl'>Divisions</h1>
          <div className='flex justify-between w-full font-sans'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='underline'>Monday</h1>
              <p>Season 33</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='underline'>Tuesday</h1>
              <p>Season 33</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='underline'>Saturday</h1>
              <p>Season 33</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='underline'>Sunday</h1>
              <p>Season 33</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
