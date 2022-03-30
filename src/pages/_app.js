import '../styles/globals.css'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import {AnimatePresence, domAnimation, LazyMotion, m} from "framer-motion"

import Script from "next/script"
import {useState} from "react"
import dynamic from 'next/dynamic'
import {animations} from "../lib/animations"
import {GlobalStateProvider} from "../lib/app-server-context";
import Header from "../components/globals/header";
import Footer from "../components/globals/footer";

const DynamicComponentWithNoSSR = dynamic(() => import('../lib/consent'), {ssr: false})

export default function App({Component, pageProps, router}) {
  const startIndex = 2;
  const [animation] = useState(animations[startIndex]);
  const [exitBefore] = useState(false);

  return (
    <GlobalStateProvider>
      <div className="">
        <Header/>
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter={!exitBefore}>
            <m.div
              key={router.route.concat(animation.name)}
              className="page-wrap"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              transition={animation.transition}
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
        <Footer/>

        <DynamicComponentWithNoSSR/>
        <Script
          data-cookiecategory="analytics"
          src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.NEXT_PUBLIC_GTM_TAG}
          strategy="afterInteractive"
          type="text/plain"
        />
        <Script
          id="analytics"
          data-cookiecategory="analytics"
          strategy="afterInteractive"
          type="text/plain">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTM_TAG}');
                `}
        </Script>

      </div>
    </GlobalStateProvider>
  )
}
