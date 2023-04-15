import Explanation from 'components/home/explanation';
import Industry from 'components/home/industry';
import Projects from 'components/home/projects';
import Trending from 'components/home/trending';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import Loop from 'components/loop';
import { NextPageWithLayout } from 'interfaces/_app/app.types';
import { ReactElement } from 'react';
import Heroe from '../components/home/heroe';

const Home: NextPageWithLayout = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-background to-backgroundLight">
      <Heroe />
      <Trending />
      <Explanation />
      <Industry />
      <Projects />
      <Loop />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
