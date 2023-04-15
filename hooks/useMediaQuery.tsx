import { useEffect, useState } from 'react';

type typeOfSizes = SizesEnum.lg | SizesEnum.md | SizesEnum.none;

enum SizesEnum {
  'lg' = 'lg',
  'md' = 'md',
  'none' = 'none',
}

const queries: { [key: string]: number } = {
  [SizesEnum.md]: 0,
  [SizesEnum.lg]: 1024,
};

const useMediaQuery = () => {
  const [screenType, setScreenType] = useState<typeOfSizes>(SizesEnum.none);
  const [isLg, setisLg] = useState(false);

  const handleResize = () => {
    for (const key in queries) {
      if (window.innerWidth >= queries[key]) {
        setScreenType(key as typeOfSizes);
      }
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenType == SizesEnum.lg) setisLg(true);
    else setisLg(false);
  }, [screenType]);

  return { screenType, isLg };
};

export default useMediaQuery;
