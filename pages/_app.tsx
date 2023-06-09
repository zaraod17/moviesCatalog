import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";

import { AuthContextProvider } from "@/contexts/AuthContext";

import MainLayout from "@/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const client = new ApolloClient({
    uri: `${router.basePath}/api/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthContextProvider>
    </ApolloProvider>
  );
}
