import HeroeAboutus from 'components/aboutus/heroe';
import Industry from 'components/aboutus/industry';
import Team from 'components/aboutus/team';
import WorkWithUs from 'components/aboutus/workWithUs';
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import Loop from 'components/loop';
import { NextPageWithLayout } from 'interfaces/_app/app.types';
import { ReactElement } from 'react';

const Aboutus: NextPageWithLayout = () => {
  return (
    <div className="pt-[75px] w-full h-full bg-gradient-to-b from-background to-backgroundLight">
      <HeroeAboutus />
      <WorkWithUs />
      <Industry />
      <Team />
      <Loop />
    </div>
  );
};

Aboutus.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Aboutus;
