import Link from "next/link"

export default function FooterMenu() {
    return (
        <footer className='bg-neutral-800 p-2 grid grid-cols-3 text-white font-mono'>
            <div className="flex flex-col items-center">
              <h1 className='underline uppercase text-xl'>Contacts</h1>
              <Link href={"https://discord.com/invite/y4NkFrw"} target="_blank" className='text-blue-400 hover:text-blue-500'>Join Discord</Link>
              <Link href={"https://github.com/BooshBear/RD2L/issues/new"} target="_blank" className='text-blue-400 hover:text-blue-500'>Report a bug</Link>
              <Link href={"https://www.reddit.com/r/redditdota2league/submit"} target="_blank" className='text-blue-400 hover:text-blue-500'>Provide Feedback</Link>
            </div>
            <div className="flex flex-col items-center">
              <h1 className='underline uppercase text-xl'>Resources</h1>
              <Link href={"/assets/rules/rules.md"} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-500'>League Rules</Link>
              <Link href={"/assets/rules/inhouserules.md"} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-500'>Inhouse Rules</Link>
              <Link href={"/"} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-500'>Playoff Brackets</Link>
            </div>
            <div className="flex flex-col items-center">
              <h1 className='underline uppercase text-xl'>Built Using</h1>
              <Link href={"https://github.com/BooshBear"} target="_blank" className='text-blue-400 hover:text-blue-500'>Your very own booshbear</Link>
              <Link href={"https://nextjs.org/"} target="_blank" className='text-blue-400 hover:text-blue-500'>NextJS</Link>
              <Link href={"https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_amers-us-ca_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14291004479&adgroup=128837427347&cq_cmp=14291004479&gad_source=1&gclid=Cj0KCQjwudexBhDKARIsAI-GWYUGBHMzv0M4n3MuRWl-ysEEWbytYZ3gjyPMlt9nUytKQRCySfBbiPMaAgmkEALw_wcB"} target="_blank" className='text-blue-400 hover:text-blue-500'>MongoDB</Link>
              {/* <Link href={"/"} target="_blank" className='text-blue-400 hover:text-blue-500'></Link> */}
            </div>
            <div className='col-span-3 flex justify-center items-center gap-5'>
                {/* Link to my github */}
                <Link href={"https://github.com/BooshBear/RD2L"} target="_blank">
                    <svg className="w-8 h-8 m-1 fill-blue-400 hover:fill-blue-500" aria-hidden="true" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                </Link>
                {/* Link to discord */}
                <Link href={"https://discord.com/invite/y4NkFrw"} target="_blank">
                    <svg className="w-8 h-8 m-1 fill-blue-400 hover:fill-blue-500" aria-hidden="true" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                    </svg>
                </Link>
            </div>
            <p className='col-span-3 text-sm opacity-80 text-center text-white'>All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.</p>
        </footer>
    )
}