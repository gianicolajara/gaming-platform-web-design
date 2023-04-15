import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import ListItemWorkWithUs from './ListItemWorkWithUs';

const WorkWithUs = () => {
  return (
    <section className="py-20">
      <PrimaryWrapper>
        <div className="flex flex-col">
          <Subtitle>Why work with us</Subtitle>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-10 gap-y-10 gap-x-5">
          <ListItemWorkWithUs />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default WorkWithUs;
