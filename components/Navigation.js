import React,{ useState } from 'react'

function Navigation() {
    const [showSideBar, setShowSideBar] = useState(false)

    //nav state
    const [navColor, setNavColor] = useState(false)
    const changeColor = () => {
        if(typeof window !== "undefined"){
        if(window.scrollY >= 50){
            setNavColor(true)
        }else {
            setNavColor(false)
        }
        }
    }

    if(typeof window !== "undefined"){
        window.addEventListener('scroll', changeColor)
    }


    return (
        <div className={`${navColor ? "bg-black" : "bg-transparent"} text-white w-full fixed top-0 z-10 opacity-100 px-9 md:px-12 py-5 rounded-sm drop-shadow-md`}>
            {/* Large screen navigation */}
            <nav className='flex justify-between items-center'>
                <h3 className='text-xl font-bold'>Illgod</h3>

                <ul className='hidden lg:flex justify-between items-center w-2/3 text-xl'>
                    <li>Home</li>
                    <li>Releases</li>
                    <li>Videos</li>
                    <li>Bio</li>
                    <li>Contact</li>
                </ul>

                <button className='lg:hidden' onClick={() => setShowSideBar(!showSideBar)}>       
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </nav>

            {/* Small screen Navigation */}
            <div className={`lg:hidden top-0 right-0 w-[380px] bg-[#98afaf] text-black p-10 fixed h-[100vh] z-40 ease-in-out duration-300 ${showSideBar ? "translate-x-0" : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSideBar(!showSideBar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className='flex flex-col mt-16 text-lg text-center'>
                        <li className='py-3 font-bold text-white'>Home</li>
                        <li className='py-3'>Releases</li>
                        <li className='py-3'>Videos</li>
                        <li className='py-3'>Bio</li>
                        <li className='py-3'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation