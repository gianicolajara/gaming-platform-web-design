import P from 'components/p';
import Tilt from 'components/tilt';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import {
  TextAlignEnum,
  TextBoldEnum,
  TextSizeEnum,
} from 'interfaces/text/text.enums';
import Image from 'next/image';

const Explanation = () => {
  return (
    <section className="pb-20">
      <PrimaryWrapper>
        <div className="pb-20">
          <Subtitle
            size={TextSizeEnum.xl}
            weight={TextBoldEnum.normal}
            align={TextAlignEnum.center}
          >
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.
          </Subtitle>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 mb-10 gap-x-32">
          <div>
            <Subtitle>Lorem Ipsum</Subtitle>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </P>
          </div>
          <div className="justify-center items-center relative hidden lg:flex">
            <Image
              alt="circles"
              src="/assets/images/circles.png"
              width={196}
              height={154}
              className="absolute bottom-[-130px]"
            />
          </div>
        </div>
        <Tilt options={{ max: 1.75 }}>
          <div className="w-full relative z-10">
            <Image
              alt="spiderman"
              src="/assets/images/background-explanation.png"
              width={1146}
              height={462}
              className="w-full h-full object-cover"
            />
          </div>
        </Tilt>
      </PrimaryWrapper>
    </section>
  );
};

export default Explanation;
