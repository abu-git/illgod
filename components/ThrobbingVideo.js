import React from 'react'

function ThrobbingVideo() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-20'>
            <div className='order-2 md:w-1/2'>
                <div className='mt-7 max-w-xl md:mx-auto'>
                    <iframe className="w-full aspect-video rounded-md" width="560" height="315" src="https://www.youtube.com/embed/ghSQ5hh1wY8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <main className='flex justify-end items-center md:w-1/3 md:mr-6'>
                <section>
                    <h3 className='font-extrabold text-right text-xl text-black mb-2'>Throbbin&apos;</h3>
                    <p className='text-right'>
                        A 2020 visual for the song &quot;Throbbin&apos; &quot; by Illgod & Timi Kei from the album &apos;SoulSoup&apos;. Directed by <span className='font-bold'>Clarence Peters</span> for CAPital Dreams Pictures.
                    </p>
                </section>
            </main>
        </div>
    )
}

export default ThrobbingVideo