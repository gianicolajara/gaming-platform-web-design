import Button from 'components/button';
import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { RoundedButtonKind } from 'interfaces/button/button.enum';
import { ReadMoreProps } from 'interfaces/portfolio/portfolio.interfaces';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import Image from 'next/image';

const ReadMore = ({ left = false, img }: ReadMoreProps) => {
  return (
    <section className="py-20">
      <PrimaryWrapper>
        <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 gap-x-52">
          <div
            className={`flex flex-col gap-y-10 items-center lg:items-start ${
              left ? 'order-3' : 'order-2'
            }`}
          >
            <Subtitle align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum is simply dummy text dummy text{' '}
            </Subtitle>
            <P align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </P>
            <P align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </P>
            <div className="w-full flex justify-center lg:justify-start">
              <Button fullRounded={RoundedButtonKind.none}>Read more</Button>
            </div>
          </div>
          <div className="w-full h-full relative order-4 lg:order-2">
            <Image
              alt="background"
              src={`/assets/images/${img}`}
              width={739}
              height={656}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default ReadMore;
