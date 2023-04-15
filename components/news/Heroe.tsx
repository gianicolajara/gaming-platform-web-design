import Breadcrumb from 'components/breadcrumb';
import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import { AiOutlineSearch } from 'react-icons/ai';

const Heroe = () => {
  return (
    <section>
      <PrimaryWrapper>
        <div className="w-full flex flex-col justify-center items-center gap-y-7">
          <Breadcrumb />
          <div>
            <Subtitle align={TextAlignEnum.center}>
              Lorem Ipsum is simply dummy text of the printing and.
            </Subtitle>
            <P align={TextAlignEnum.center}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </P>
          </div>
          <div className="w-full h-[50px] max-w-[520px] bg-white/5 flex rounded-lg mt-10">
            <div className="h-[50] w-[50px] flex justify-center items-center">
              <AiOutlineSearch size={25} color="white" />
            </div>
            <input
              placeholder="Search"
              className="bg-transparent placeholder:text-white text-white w-full h-full"
            />
          </div>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Heroe;
