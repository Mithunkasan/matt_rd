// import { ChakraProvider } from "@chakra-ui/react";
// import styled from "@emotion/styled";
// import "./styles.css";
// import "./responsive.css";
// import theme from "../theme"; // Ensure this theme is correctly set up
// import { AppProps } from "next/app";
// import Head from "next/head";
// import Script from "next/script";
// import ChatwootWidget from "../components/ChatwootWidget";
// import GoogleAnalytics from "../components/GoogleAnalytics";

// interface StyledComponentProps {
//   disableAnimation?: boolean;
// }

// // Define the styled component
// const StyledComponent = styled("div")<StyledComponentProps>(
//   ({ theme, disableAnimation }) => ({
//     transition: disableAnimation
//       ? "none"
//       : `
//         color 150ms ease-out,
//         transform 150ms ease-out,
//         max-width 150ms ease-out
//       `,
//     color: "black",
//     transform: "scale(1)",
//     maxWidth: "100%",
//     "&:hover": {
//       color: "blue",
//       transform: "scale(1.1)",
//       maxWidth: "110%",
//     },
//   })
// );

// const MyComponent: React.FC = () => {
//   return (
//     <StyledComponent disableAnimation={false}>Hover over me!</StyledComponent>
//   );
// };

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ChakraProvider theme={theme}>
//       <Head>
//         {/* Meta Information */}
//         <title> PhD Writing Expert | Matt Research Solutins</title>
//         <meta
//           name="description"
//           content="Comprehensive Research Guidance for PhD scholars. Proposal writing, Thesis, Publication, Data analysis, and more. Partner with MATT for academic success."
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="theme-color" content="#ffffff" />
//         <meta name="msapplication-TileColor" content="#ffffff" />
//         <meta
//           name="msapplication-TileImage"
//           content="https://rd.mattengg.com/assets/ms-icon-144x144.png"
//         />
//         <meta
//           name="google-site-verification"
//           content="HJ8iSA-NgYfjfW7Pzasl6Pp9Xoc29aGLxvpc8JT9exA"
//         />

//         {/* Open Graph for Social Sharing */}
//         <meta
//           property="og:title"
//           content="  PhD Writing Expert  | Matt Research Solutions"
//         />
//         <meta
//           property="og:description"
//           content="Comprehensive Research Guidance for PhD scholars. Proposal writing, Thesis, Publication, Data analysis, and more."
//         />
//         <meta
//           property="og:image"
//           content="https://rd.mattengg.com/assets/social-thumbnail.jpg"
//         />
//         <meta property="og:url" content="https://mattrd.com/" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="PhD Writing Expert " />
//         <meta
//           name="twitter:description"
//           content="Comprehensive Research Guidance for PhD scholars. Proposal writing, Thesis, Publication, Data analysis, and more."
//         />
//         <meta
//           name="twitter:image"
//           content="https://rd.mattengg.com/assets/social-thumbnail.jpg"
//         />

//         {/* Favicons */}
//         <link
//           rel="apple-touch-icon"
//           sizes="57x57"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="60x60"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="72x72"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="76x76"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="114x114"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="120x120"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="144x144"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="152x152"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="192x192"
//           href="/favicon/matt-logo01.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon/mattlogo0.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="144x144"
//           href="/favicon/matt-logo1.ico"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="144x144"
//           href="/favicon/matt-logo1.ico"
//         />
//         <link rel="webmanifest" href="/favicon/site.webmanifest.json" />

//         {/* External Stylesheets */}
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//           crossOrigin="anonymous"
//         />
//         <Script
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-T5R79P5S');`,
//           }}
//         />
//       </Head>

//       {/* Scripts */}
//       <Script
//         strategy="afterInteractive"
//         src="https://www.googletagmanager.com/gtag/js?id=G-S41ZB6WZMR"
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-S41ZB6WZMR', {
//               page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//       <Script
//         id="bootstrap-cdn"
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
//       />

//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-T5R79P5S"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         ></iframe>
//       </noscript>

//       <div
//         dangerouslySetInnerHTML={{
//           __html: `
//     <noscript>
//       <img height="1" width="1" style="display:none"
//         src="https://www.facebook.com/tr?id=1408059316888193&ev=PageView&noscript=1"
//       />
//     </noscript>
//   `,
//         }}
//       />

//       {/* Chatwoot and WhatsApp */}
//       <ChatwootWidget />
//       <div className="whatsapp_pulse">
//         <a
//           // href="https://wa.me/+918825735141"
//           href="https://wa.me/+917339585868"
//           className="whatsapp_float"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Contact us on WhatsApp"
//         >
//           <i className="fa fa-whatsapp whatsapp-icon"></i>
//         </a>
//       </div>

//       <div
//         dangerouslySetInnerHTML={{
//           __html: `
//     <noscript>
//       <img height="1" width="1" style="display:none"
//         src="https://www.facebook.com/tr?id=1408059316888193&ev=PageView&noscript=1"
//       />
//     </noscript>
//   `,
//         }}
//       />

//       {/* Components */}
//       {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

// export default MyApp;


import { ChakraProvider } from "@chakra-ui/react";
import styled from "@emotion/styled";
import "./styles.css";
import "./responsive.css";
import theme from "../theme"; // Ensure this theme is correctly set up
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ChatwootWidget from "../components/ChatwootWidget";
import GoogleAnalytics from "../components/GoogleAnalytics";

interface StyledComponentProps {
  disableAnimation?: boolean;
}

// Define the styled component
const StyledComponent = styled("div")<StyledComponentProps>(
  ({ theme, disableAnimation }) => ({
    transition: disableAnimation
      ? "none"
      : `
        color 150ms ease-out,
        transform 150ms ease-out,
        max-width 150ms ease-out
      `,
    color: "black",
    transform: "scale(1)",
    maxWidth: "100%",
    "&:hover": {
      color: "blue",
      transform: "scale(1.1)",
      maxWidth: "110%",
    },
  })
);

const MyComponent: React.FC = () => {
  return (
    <StyledComponent disableAnimation={false}>Hover over me!</StyledComponent>
  );
};

function MyApp({ Component, pageProps }: AppProps) {

    const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq("track", "PageView");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Admin pages: skip global site wrappers & CSS so dark theme works cleanly
  // Exception: /admin/preview needs full site wrappers to accurately preview the blog
  const isAdmin = router.pathname.startsWith('/admin') && !router.pathname.startsWith('/admin/preview');
  if (isAdmin) {
    return <Component {...pageProps} />;
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        {/* Meta Information */}
        <title> PhD Writing Expert | Matt Research Solutins</title>
        <meta
          name="description"
          content="Comprehensive Research Guidance for PhD scholars. Proposal writing, Thesis, Publication, Data analysis, and more. Partner with MATT for academic success."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="https://rd.mattengg.com/assets/ms-icon-144x144.png"
        />
        <meta
          name="google-site-verification"
          content="HJ8iSA-NgYfjfW7Pzasl6Pp9Xoc29aGLxvpc8JT9exA"
        />

        {/* Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="  PhD Writing Expert  | Matt Research Solutions"
        />
        <meta
          property="og:description"
          content="Comprehensive Research Guidance for PhD scholars. Proposal writing, Thesis, Publication, Data analysis, and more."
        />
        <meta
          property="og:image"
          content="https://rd.mattengg.com/assets/social-thumbnail.jpg"
        />
        <meta property="og:url" content="https://mattrd.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhD Writing Expert " />
        <meta
          name="twitter:description"
          content="Comprehensive Research Guidance for PhD scholars. Proposal writing, Thesis, Publication, Data analysis, and more."
        />
        <meta
          name="twitter:image"
          content="https://rd.mattengg.com/assets/social-thumbnail.jpg"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/matt-logo01.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/mattlogo0.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/matt-logo1.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/matt-logo1.ico"
        />
        <link rel="webmanifest" href="/favicon/site.webmanifest.json" />

        {/* External Stylesheets */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5R79P5S');`,
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

        {/* Custom Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-S41ZB6WZMR"
      />
  {/* <!-- Google tag (gtag.js) --> */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-YYMRGHY0E6"/>
<Script
  id="gtag-init-YYMRGHY0E6"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YYMRGHY0E6', {
        page_path: window.location.pathname,
      });
    `,
  }}
/>

{/* <!-- Google Tag Manager --> */}
{/* ✅ Google Tag Manager Script */}
<Script
  id="gtm-init"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KK9PBFSJ');
    `,
  }}
/>

      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />

    {/* <!-- Google Tag Manager (noscript) --> */}
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-KK9PBFSJ"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
</noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}

     <div
        dangerouslySetInnerHTML={{
          __html: `
    <noscript>
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2984196901761189&ev=PageView&noscript=1"
      />
    </noscript>
  `,
        }}
      />

      {/* Chatwoot and WhatsApp */}
      <ChatwootWidget />
      <div className="whatsapp_pulse">
        <a
          // href="https://wa.me/+918825735141"
          href="https://wa.me/+917339585868"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `
    <noscript>
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2984196901761189&ev=PageView&noscript=1"
      />
    </noscript>
  `,
        }}
      /> 

      {/* Components */}
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
