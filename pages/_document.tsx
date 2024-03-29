import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
