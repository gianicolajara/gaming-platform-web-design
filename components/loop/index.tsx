import { TextAlignEnum, TextBoldEnum } from 'interfaces/text/text.enums';
import Button from '../button';
import P from '../p';
import Subtitle from '../titles/subtitle';
import PrimaryWrapper from '../wrapper/PrimaryWrapper';

const Loop = () => {
  return (
    <section className="py-20">
      <PrimaryWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-x-56">
          <div>
            <Subtitle align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum
            </Subtitle>
            <P align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </P>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 bg-white/5 py-5 px-10 rounded-xl mt-14">
          <div className="lg:pr-32">
            <Subtitle
              align={TextAlignEnum.center}
              weight={TextBoldEnum.semiBold}
              className="lg:text-left"
            >
              Stay in the loop
            </Subtitle>
            <P align={TextAlignEnum.center} className="lg:text-left">
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{' '}
            </P>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex w-full h-[50px] bg-white p-1 rounded-lg">
              <input className="w-full lg:pl-10" placeholder="Email address" />
              <Button>Continue</Button>
            </div>
          </div>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Loop;
