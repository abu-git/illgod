import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'
import BioContent from '@/components/BioContent'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion'


function Biography() {
    return (
        <>
            <Head>
                <title>Illgod | Biography</title>
                <meta name="description" content="Illgod | Official Website" />
                <meta property='og:description' content="Illgod Biography" />
                <meta  property='og:image' itemProp="image" content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687444504/metaBio_k3rc17.jpg'/>
                <meta  property='og:image:secure_url' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687444504/metaBio_k3rc17.jpg'/>
                <meta property="og:url" content="https://illgod.vercel.app/biography" />
                <meta property="og:image:width" content="2024" />
                <meta property="og:image:height" content="1012" />
                <meta property="og:type" content="website" />

                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:title' content="Illgod | Official Website" />
                <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1687444504/metaBio_k3rc17.jpg' />
                <meta name="twitter:creator" content="@reachmhp"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Navigation />
                <MiniLanding header="Biography" />
                <BioContent />
                <Footer />
            </motion.main>
        </>
    )
}

export default Biography