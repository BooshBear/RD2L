export default function Profile() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className="flex flex-col justify-center items-center text-center"> 
                <h1>Hello welcome, "username"</h1>
                <p>
                    This is your account page<br></br>
                    Please add you Steam Friend Code here so we can get you hooked up<br></br>
                    And so you could join in the seasons.
                </p>
                <input className="border-2 border-black text-center rounded-[4px] p-[2px]" type="number" placeholder="Steam Friend Code" title="Steam Friend Code"/>
            </div>
        </main>
    )
}