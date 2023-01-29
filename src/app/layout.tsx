"use client";

import ApolloProvider from "@/lib/apollo-client/apollo-provider";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
      <head />
      <body>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
