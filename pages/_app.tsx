import { AppProps } from 'next/app'
import { analytics } from '../components/analytics';
import { ReactElement, ReactNode, useEffect } from 'react'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    analytics(window, document, 'script', 'dataLayer', 'GTM-TVF5LJ7');
  })
  
  return <Component {...pageProps} />
}

