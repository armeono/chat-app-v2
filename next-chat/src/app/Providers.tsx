"use client";
import { SessionProvider, getSession, useSession } from "next-auth/react";
import NavigationLayout from "./NavigationLayout";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children?: React.ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Props, { pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps?.session}>
      <QueryClientProvider client={queryClient}>
        <NavigationLayout>{children}</NavigationLayout>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
