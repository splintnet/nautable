import {Head, Html, Main, NextScript} from 'next/document'
import {jsonLdScriptProps} from "react-schemaorg";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon"
sizes="180x180"
href="/icons/apple-touch-icon.png"/>
        <link rel="icon"
type="image/png"
sizes="32x32"
href="/icons/favicon-32x32.png"/>
        <link rel="icon"
type="image/png"
sizes="16x16"
href="/icons/favicon-16x16.png"/>
        <link rel="manifest"
href="/site.webmanifest"/>
        <link rel="mask-icon"
href="/icons/safari-pinned-tab.svg"
color="#5bbad5"/>
        <link rel="shortcut icon"
href="/icons/favicon.ico"/>
        <meta name="msapplication-TileColor"
content="#2b5797"/>
        <meta name="msapplication-config"
content="/browserconfig.xml"/>
        <meta name="theme-color"
content="#ffffff"/>

        <meta name='application-name'
content='nautable'/>
        <meta name='apple-mobile-web-app-capable'
content='yes'/>
        <meta name='apple-mobile-web-app-status-bar-style'
content='default'/>
        <meta name='apple-mobile-web-app-title'
content='nautable'/>
        <meta name='format-detection'
content='telephone=no'/>
        <meta name='mobile-web-app-capable'
content='yes'/>
        <meta name='msapplication-tap-highlight'
content='no'/>

        <link rel='manifest'
href='/manifest.json'/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <script
          {...jsonLdScriptProps([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "nautable",
              "alternateName": "nautable",
              "url": "https://www.nautable.com/",
              "logo": "https://www.nautable.com/icons/apple-touch-icon.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+49 40 210 919 45-0",
                "contactType": "customer service"
              }],
              "sameAs": ["https://www.facebook.com/nautable", "https://instagram.com/nautable"]
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Customer reviews",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "ratingCount": 34,
                "bestRating": 5,
                "worstRating": 4.5
              }
            }
          ])}
        />

      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
