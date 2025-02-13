import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="grid grid-col-2 gap-6 items-center flex-grow">
        <div className="mb-10 col-span-2 flex flex-col justify-center items-center ">
          <h1 className="uppercase font-mono text-4xl text-shadow-[_6px_8px_3px_var(--tw-shadow-color)] shadow-[#c34e50] mb-10">
            divisions
          </h1>
          <div className="grid grid-cols-5 w-full font-sans uppercase text-neutral-800">
            <div>
              <Link
                href={"/divisions/monday-8pm-est"}
                className="flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]"
              >
                <p className="text-lg">Monday 8PM EST</p>
                <Image
                  className="absolute z-[-1] translate-y-[8px]"
                  src={"/assets/images/bpixel.png"}
                  alt="...loading"
                  height={200}
                  width={200}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href={"/divisions/tuesday-9pm-est"}
                className="flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]"
              >
                <p className="text-lg">Tuesday 9PM EST</p>
                <Image
                  className="absolute z-[-1] translate-y-[8px]"
                  src={"/assets/images/bpixel.png"}
                  alt="...loading"
                  height={200}
                  width={200}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href={"/divisions/wednesday-7pm-pst"}
                className="flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]"
              >
                <p className="text-lg">Wednesday 6PM PST</p>
                <Image
                  className="absolute z-[-1] translate-y-[8px]"
                  src={"/assets/images/bpixel.png"}
                  alt="...loading"
                  height={200}
                  width={200}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href={"/divisions/sunday-8pm-est"}
                className="flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]"
              >
                <p className="text-lg">Sunday 8PM EST</p>
                <Image
                  className="absolute z-[-1] translate-y-[8px]"
                  src={"/assets/images/bpixel.png"}
                  alt="...loading"
                  height={200}
                  width={200}
                ></Image>
              </Link>
            </div>
            <div>
              <Link
                href={"/divisions/sunday-7pm-pst"}
                className="flex flex-col text-sm justify-center items-center transition-all duration-150 hover:text-white hover:text-xs hover:grayscale-[1]"
              >
                <p className="text-lg">Sunday 7PM PST</p>
                <Image
                  className="absolute z-[-1] translate-y-[8px]"
                  src={"/assets/images/bpixel.png"}
                  alt="...loading"
                  height={200}
                  width={200}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-span-3">
          <Image
            className="relative drop-shadow-[0_0_6rem_#141414]"
            src="/assets/images/rd2l-lame.png"
            alt="My Image"
            width={1050}
            height={150}
            priority
          />
        </div>
        <Card className="row-start-2 flex flex-col justify-center items-center rounded-[4px] h-60 w-80 bg-[#141414] text-white border-2 border-[#c34e50] transition-all duration-500 hover:border-4 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-[#c34e50]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#e8eaed"
                className="mr-1"
              >
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              General Info
            </CardTitle>
            <CardDescription className="text-white">
              Individual signups<br></br>
              Teams built via draft<br></br>8 week BO2 regular season<br></br>
              Top teams make playoffs<br></br>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex flex-col justify-center items-center rounded-[4px] h-60 w-80 p-6 bg-[#141414] text-white border-2 border-[#c34e50] transition-all duration-500 hover:border-4 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-[#c34e50]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                className="mr-1"
              >
                <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
              </svg>
              Player Culture
            </CardTitle>
            <CardDescription className="text-white">
              Make new friends<br></br>
              Grow with your teammates<br></br>
              Enjoy community content<br></br>
              Play with all skill levels<br></br>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex flex-col justify-center items-center rounded-[4px] h-60 w-80 p-6 bg-[#141414] text-white border-2 border-[#c34e50] transition-all duration-500 hover:border-4 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-[#c34e50]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
                className="mr-1"
              >
                <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
              </svg>
              RD2L Features
            </CardTitle>
            <CardDescription className="text-white">
              Inhouse partipition<br></br>
              Play in weekend tourneys<br></br>
              Mini leagues between seasons<br></br>
              Find Battlecup stacks<br></br>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
