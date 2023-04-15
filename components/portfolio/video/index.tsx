import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import Image from 'next/image';
import ListItemChecked from './ListItemChecked';

const Video = () => {
  return (
    <section className="py-20">
      <PrimaryWrapper>
        <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 gap-x-20 ">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <Image
              alt="heroe-video"
              src="/assets/images/heroe-video.png"
              width={677}
              height={364}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <Subtitle align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum is simply dummy text.
            </Subtitle>
            <P align={TextAlignEnum.center} className="lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy .
            </P>
            <ListItemChecked />
          </div>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Video;
