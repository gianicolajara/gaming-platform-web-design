import Breadcrumb from 'components/breadcrumb';
import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import ListItemStatistics from './ListItemStatistics';

const Statistics = () => {
  return (
    <section className="py-10 lg:py-20">
      <PrimaryWrapper>
        <div className="w-full flex flex-col justify-center items-center">
          <Breadcrumb />
          <Subtitle align={TextAlignEnum.center}>
            Lorem Ipsum is simply dummy text of the printing and.
          </Subtitle>
          <P align={TextAlignEnum.center}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </P>
        </div>
        <div className="w-full mt-10 flex justify-center">
          <ListItemStatistics />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Statistics;
