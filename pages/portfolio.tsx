import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import Loop from 'components/loop';
import Customers from 'components/portfolio/customers';
import { listCustomers } from 'components/portfolio/customers/utils/listCustomers';
import Information from 'components/portfolio/information';
import Statistics from 'components/portfolio/statistics';
import Video from 'components/portfolio/video';
import { NextPageWithLayout } from 'interfaces/_app/app.types';
import { ReactElement } from 'react';

const Portfolio: NextPageWithLayout = () => {
  return (
    <div className="pt-[75px] w-full h-full bg-gradient-to-b from-background to-backgroundLight">
      <Statistics />
      <Video />
      <Information />
      <Customers listCustomers={listCustomers} />
      <Loop />
    </div>
  );
};

Portfolio.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Portfolio;
