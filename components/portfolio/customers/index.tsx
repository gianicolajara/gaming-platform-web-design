import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { CustomerProps } from 'interfaces/portfolio/portfolio.interfaces';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import ListItemCustomers from './ListItemCustomers';

const Customers = ({ listCustomers }: CustomerProps) => {
  return (
    <section className="py-20 bg-white/5">
      <PrimaryWrapper>
        <div className="flex flex-col gap-y-5">
          <Subtitle align={TextAlignEnum.center}>
            Trusted by Thousands of Happy Customer
          </Subtitle>
          <P align={TextAlignEnum.center}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </P>
        </div>
        <ListItemCustomers listCustomers={listCustomers} />
      </PrimaryWrapper>
    </section>
  );
};

export default Customers;
