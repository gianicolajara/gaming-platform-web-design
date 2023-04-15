import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import ListItemsIndutry from './ListItemsIndutry';

const Industry = () => {
  return (
    <section
      className={`bg-[url('/assets/images/background-industry.png')] bg-no-repeat bg-center bg-cover py-20`}
    >
      <PrimaryWrapper>
        <div className="px-[1em] flex flex-col gap-y-7">
          <Subtitle align={TextAlignEnum.center}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Subtitle>
          <P align={TextAlignEnum.center}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </P>
        </div>
        <div className="mt-20">
          <ListItemsIndutry />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Industry;
