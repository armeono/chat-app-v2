"use client";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import NavigationLayout from "./NavigationLayout";
import { AppProps } from "next/app";

type Props = {
  children?: React.ReactNode;
};

const Providers = ({ children }: Props, { pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps?.session}>
      <NavigationLayout>{children}</NavigationLayout>
    </SessionProvider>
  );
};

export default Providers;
