import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { Newsreader } from 'next/font/google'
 
const bodyFont = Newsreader({
  subsets:["latin"],
  weight:["200","300","400","500","600","600","800"],
  variable: '--font-newsreader'
})


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (

    <SessionProvider session={session}>
      <main className={`${bodyFont.variable} font-custom`}>
      <Component {...pageProps} />
      </main>
    </SessionProvider>

  );
};

export default api.withTRPC(MyApp);
