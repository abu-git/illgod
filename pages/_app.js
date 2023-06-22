import '@/styles/globals.css'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

/* Google Analytics ----
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2EW9HS66GF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2EW9HS66GF');
</script> */


/* Page Loader settings ----------------------------------*/
function Loading(url){
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  //console.log(router)

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true) 
    const handleComplete = (url = router.pathname) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 1000)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 bg-[#161616] z-[9999]'>
      <div className="pulsar"></div>

    </motion.div>
  )
}


export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-2EW9HS66GF`} />
      <Script id='analytics' strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'G-2EW9HS66GF');
          `
        }
      </Script>
      <Loading />
      <Component {...pageProps} />
    </>
    
  )
}
