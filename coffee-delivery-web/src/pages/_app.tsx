/* eslint-disable react/no-unknown-property */

import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

import { Roboto, Baloo_2 } from 'next/font/google'
import Head from 'next/head'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --roboto: ${roboto.style.fontFamily};
          --baloo2: ${baloo2.style.fontFamily};
        }
      `}</style>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </>
  )
}
