import React from 'react'

function ASongOfIceFireVideo() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-20'>
            <div className='order-2 md:order-1 md:w-1/2'>
                <div className='mt-7 max-w-xl md:mx-auto'>
                    <iframe className="w-full aspect-video rounded-md" width="560" height="315" src="https://www.youtube.com/embed/QZXGLz1XKTI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <main className='order-1 md:order-2 flex justify-start items-center md:w-1/3 md:ml-6'>
                <section>
                    <h3 className='font-extrabold text-left text-xl text-black mb-2'>A Song of Ice & Fire</h3>
                    <p className='text-left'>
                        A 2022 visual for the track &apos;A Song of Ice & Fire&apos;. From the album &apos;Kablooie&apos;. 
                    </p>
                </section>
            </main>
        </div>
    )
}

export default ASongOfIceFireVideo