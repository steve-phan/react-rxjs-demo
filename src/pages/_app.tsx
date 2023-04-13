"use client";

import type { AppProps } from "next/app";

import { GlobalProviders } from "../Providers";
import "../globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  );
}
