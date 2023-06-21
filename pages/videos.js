import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'

function Videos() {
    return (
        <>
            <Head>
                <title>Illgod</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navigation />
                <MiniLanding header={"Videos"} />
            </main>
        </>
    )
}

export default Videos