import { useRouter } from 'next/router';

const pagesMap = new Map();
pagesMap.set('/aboutus', 'About us');
pagesMap.set('/portfolio', 'Portfolio');
pagesMap.set('/news', 'News');

const useBreadcrumb = () => {
  const router = useRouter();

  const homePath = 'Home';
  const actualPath = pagesMap.get(router.asPath);

  return { homePath, actualPath };
};

export default useBreadcrumb;
