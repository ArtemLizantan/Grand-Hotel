import 'modern-normalize/modern-normalize.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '@/components/Layout';
import defaultMeta from '@/constants/meta';
import theme from '@/constants/theme';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const meta = pageProps.meta || defaultMeta;

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
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
