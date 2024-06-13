import Image from 'next/image'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col rounde items-center justify-between p-10">
      <div className='grid grid-col-2 gap-6 justify-center items-center'>
        <div className='mb-10 col-span-2 flex flex-col justify-center items-center'>
          <h1 className='uppercase font-mono text-4xl text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#9b3839] mb-10'>divisions</h1>
          <div className='grid grid-cols-5 w-full font-sans uppercase'>
            <Link href={"/divisions"} className="flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]">
              <p>Monday 8PM EST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]'>
              <p>Tuesday 9PM EST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col justify-center text-sm items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]'>
              <p>Wednesday 6PM PST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]'>
              <p>Sunday 8PM EST</p>
              <Image className='absolute z-[-1] translate-y-[8px]' src={'/assets/images/bpixel.png'} alt='...loading' height={200} width={200}></Image>
            </Link>
            <Link href={"/divisions"} className='flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-sm hover:grayscale-[1]'>
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
        <Card className='row-start-2 flex flex-col justify-center items-center rounded-[4px] h-60 w-80 bg-[#141414] text-white border-4 border-[#9b3839]'>
          <CardHeader>
            <CardTitle className='text-2xl'>General Info</CardTitle>
            <CardDescription>
              Individual signups<br></br>
              Teams built via draft<br></br>
              8 week BO2 regular season<br></br>
              Top teams make playoffs<br></br>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='flex flex-col justify-center items-center rounded-[4px] h-60 w-80 p-6 bg-[#141414] text-white border-4 border-[#9b3839]'>
          <CardHeader>
            <CardTitle className='text-2xl'>Player Culture</CardTitle>
            <CardDescription>
               Make new friends<br></br>
              Grow with your teammates<br></br>
              Enjoy community content<br></br>
              Play with all skill levels<br></br>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className='flex flex-col justify-center items-center rounded-[4px] h-60 w-80 p-6 bg-[#141414] text-white border-4 border-[#9b3839]'>
          <CardHeader>
            <CardTitle className='text-2xl'>RD2L Features</CardTitle>
            <CardDescription>
              Inhouse partipition<br></br>
              Play in weekend tourneys<br></br>
              Mini leagues between seasons<br></br>
              Find Battlecup stacks<br></br>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  )
}
