import { AppPropsWithLayout } from 'interfaces/_app/app.types';
import { Poppins } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={poppins.className}>
      <NextNProgress color="orange" />
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
