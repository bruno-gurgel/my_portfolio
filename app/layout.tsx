"use client";

import Navbar from "@/components/navbar/navbar";
import ApolloProvider from "@/lib/apollo-client/apollo-provider";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { AnalyticsWrapper } from "./components/analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>Bruno Gurgel</title>
      <meta
        name="description"
        content="Bruno Gurgel's personal website. I'm a software engineer, currently working at @smarthis."
      />
      <meta property="og:title" content="Bruno Gurgel's personal website" />
      <head />
      <body>
        <ApolloProvider>
          <Navbar />
          {children}
          <AnalyticsWrapper />
        </ApolloProvider>
      </body>
    </html>
  );
}
