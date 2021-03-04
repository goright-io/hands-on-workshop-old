import Document, { Html, Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga";
const GA_TRACKING_ID = "UA-185519437-1";
const OPT_CONTAINER_ID = "OPT-KRWKXQN";

function trackPageView() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    return;
  }
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize(GA_TRACKING_ID);
    window.GA_INITIALIZED = true;
  }
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    trackPageView();
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            src={`https://www.googleoptimize.com/optimize.js?id=${OPT_CONTAINER_ID}`}
          ></script>
          {/* OG tags */}
          <meta property="og:title" content="Hands-on with Design Systems: 2-day workshop with Figma & React" />
          <meta property="og:url" content="https://hands-on-workshop.varya.me/" />
          <meta property="og:image" content="https://hands-on-workshop.varya.me/poster.png" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer." />
          <meta property="og:locale" content="en_GB" />

        </Head>
        <body className="leading-normal tracking-normal text-white gradient">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
