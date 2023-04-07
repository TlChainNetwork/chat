import * as React from 'react';
import Head from 'next/head';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

import { createEmotionCache, theme } from '@/lib/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return <div style={{ backgroundImage: 'url("https://decryption.com/static/media/main-background-2.6e7fc3b9.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>AI Decryption Chat</title> {/* Add title here */}
      </Head>
      <CssVarsProvider defaultMode='light' theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </CssVarsProvider>
    </CacheProvider>
    <VercelAnalytics debug={false} />
  </div>;
}