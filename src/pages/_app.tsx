import 'modern-normalize/modern-normalize.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Layout from '@/components/Layout';
import defaultMeta from '@/constants/meta';
import paypalScriptOptions from '@/constants/paypalScriptOptions';
import theme from '@/constants/theme';

// TODO: If you need animation, uncomment (site with animations https://michalsnik.github.io/aos/)

// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const meta = pageProps.meta || defaultMeta;

  // useEffect(() => {
  //   AOS.init({
  //     easing: 'ease-out-cubic',
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content={meta.description}
        />
        <link
          rel='canonical'
          href={process.env.NEXT_PUBLIC_CANONICAL_URL}
        />
        <title>{meta.title}</title>
        <link
          rel='icon'
          href={meta.faviconPath}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <PayPalScriptProvider options={paypalScriptOptions}>
            <Component {...pageProps} />
          </PayPalScriptProvider>
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
