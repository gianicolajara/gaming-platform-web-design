import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import Loop from 'components/loop';
import Heroe from 'components/news/Heroe';
import Board from 'components/news/board';
import { NextPageWithLayout } from 'interfaces/_app/app.types';
import { ReactElement } from 'react';

const News: NextPageWithLayout = () => {
  return (
    <div className="pt-[75px] w-full h-full bg-gradient-to-b from-background to-backgroundLight">
      <Heroe />
      <Board />
      <Loop />
    </div>
  );
};

News.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default News;
