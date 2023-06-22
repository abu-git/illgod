import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import MiniLanding from '@/components/MiniLanding'
import ContactContent from '@/components/ContactContent'
import Footer from '@/components/Footer'


function Contact() {
    return (
        <>
            <Head>

            </Head>
            <main>
                <Navigation />
                <MiniLanding header="Contact" />
                <ContactContent />
                <Footer />
            </main>
        </>
    )
}

export default Contact