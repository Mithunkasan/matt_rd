// import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// import { ColorModeScript } from '@chakra-ui/react'
// import TagManager from 'react-gtm-module'
// import { ChildCare } from '@material-ui/icons'

// // const tagManagerArgs = {
// //   gtmId: 'AW-938849554',
// //   dataLayerName: 'PageDataLayer'
// // }
// // if (process.browser) {
// //   TagManager.initialize(tagManagerArgs);
// // }
// // TagManager.initialize(tagManagerArgs)
// export default class Document extends NextDocument {

//   render() {
//     return (

//       <Html lang="en"  data-theme="light" style={{ colorScheme: 'light' }}>
//         <Head>


//           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossOrigin="anonymous" />
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
//           <script async src={`https://www.googletagmanager.com/gtag/js?id=AW-938849554`} />
//           <script id='google-adds'
//             dangerouslySetInnerHTML={{
//               __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-938849554', {
//               page_path: window.location.pathname,
//               });`,
//             }} />
//         </Head>
//         <body>
//           {/* Make Color mode to persists when you refresh the page. */}
//           <ColorModeScript />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
// import React from 'react';
// import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import { ColorModeScript } from '@chakra-ui/react';
// import TagManager from 'react-gtm-module';
// import createCache from '@emotion/cache';
// import createEmotionServer from '@emotion/server/create-instance';
// import { CacheProvider } from '@emotion/react';

// Document.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;

//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App: any) => (props) =>
//         (
//           <CacheProvider value={cache}>
//             <App {...props} />
//           </CacheProvider>
//         ),
//     });

//   const initialProps = await Document.getInitialProps(ctx);
//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));

//   return {
//     ...initialProps,
//     styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
//   };
// };



// const tagManagerArgs = {
//   gtmId: 'AW-938849554',
//   dataLayerName: 'PageDataLayer',
// };

// const createEmotionCache = () => {
//   return createCache({ key: 'css', prepend: true });
// };

// // Initialize Google Tag Manager only once, in a suitable location
// // This should ideally be in a client-side component (like _app.js) using useEffect
// if (typeof window !== 'undefined') {
//   TagManager.initialize(tagManagerArgs);
// }

// export default class Document extends NextDocument {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <link
//             rel="stylesheet"
//             href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
//             integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e"
//             crossOrigin="anonymous"
//           />
//           <link
//             rel="stylesheet"
//             href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
//           />
//           <script async src={`https://www.googletagmanager.com/gtag/js?id=AW-938849554`} />
//           <script
//             id="google-adds"
//             dangerouslySetInnerHTML={{
//               __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-938849554', {
//                 page_path: window.location.pathname,
//               });`,
//             }}
//           />
//         </Head>
//         <body>
//           {/* Make Color mode to persist when you refresh the page. */}
//           <ColorModeScript initialColorMode="light" />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }


import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider } from '@emotion/react';
import Script from 'next/script';

const tagManagerArgs = {
  // gtmId: 'AW-938849554',
  dataLayerName: 'PageDataLayer',
};

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <CacheProvider value={cache}>
            <App {...props} />
          </CacheProvider>
        ),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      TagManager.initialize(tagManagerArgs);
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
            integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=AW-938849554`} /> */}
          {<script async src="https://www.googletagmanager.com/gtag/js?id=G-YYMRGHY0E6"></script>}
          <script
            id="google-adds"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', {
                page_path: window.location.pathname,
              });`,
            }}
          />
          <Script
            id="2984196901761189"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2984196901761189'); 
      fbq('track', 'PageView');
    `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none", visibility: "hidden" }}
              src="https://www.facebook.com/tr?id=2984196901761189&ev=PageView&noscript=1"
            />
          </noscript>

        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

