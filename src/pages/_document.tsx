import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
declare global {
  interface Window {
    analytics: any;
  }
}

export default class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=2420488224770546&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
        <body className="uk-container-expand" id="main">
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K6CCQGK"
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden"
              }}
            />
          </noscript>
          <Main />
          <NextScript />
          
         
         
         
        </body>
      </Html>
    );
  }
}
